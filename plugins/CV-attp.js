import fetch from 'node-fetch';
import { promises as fs } from 'fs';
import { tmpdir } from 'os';
import { join } from 'path';

export async function generateAttpGif(text) {
    try {
        // Panggil API untuk membuat gambar GIF "ATTP" dengan teks yang diberikan
        const attpResponse = await fetch(`https://api.neastooid.xyz/api/maker/attp?text=${encodeURIComponent(text)}`);

        if (!attpResponse.ok) {
            throw new Error(`Gagal membuat GIF ATTP: ${attpResponse.status}`);
        }

        // Pastikan content-type adalah 'image/gif'
        if (attpResponse.headers.get('content-type') !== 'image/gif') {
            throw new Error('Response bukan gambar GIF');
        }

        // Unduh file GIF yang dihasilkan
        const imageBuffer = await attpResponse.buffer();

        // Tentukan path sementara untuk menyimpan file GIF
        const tempPath = join(tmpdir(), 'attp_image.gif');
        await fs.writeFile(tempPath, imageBuffer);

        // Baca file sementara sebagai buffer untuk upload
        const fileBuffer = await fs.readFile(tempPath);

        // Unggah file ke API upload
        const uploadResponse = await fetch('https://www.neastooid.xyz/api/upload', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/octet-stream',
            },
            body: fileBuffer,
        });

        if (!uploadResponse.ok) {
            throw new Error(`Gagal mengunggah file: ${uploadResponse.status}`);
        }

        // Ambil respons JSON dari API upload
        const uploadResult = await uploadResponse.json();

        if (!uploadResult.url) {
            throw new Error('URL tidak ditemukan dalam respons upload');
        }

        // Hapus file sementara setelah selesai
        await fs.unlink(tempPath);

        // Kembalikan hasil sebagai objek
        return {
            success: true,
            results: {
                url: uploadResult.url, // URL raw hasil upload
            },
        };
    } catch (error) {
        console.error('Error:', error.message);
        return {
            success: false,
            error: 'Gagal membuat GIF ATTP atau mengunggah ke GitHub',
        };
    }
}

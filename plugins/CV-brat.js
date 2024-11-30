import fetch from 'node-fetch';
import { promises as fs } from 'fs';
import { tmpdir } from 'os';
import { join } from 'path';

export async function generateBratImage(text) {
    try {
        // Panggil API untuk membuat gambar "Brat" dengan teks yang diberikan
        const bratResponse = await fetch(`https://api.neastooid.xyz/api/maker/brat?text=${encodeURIComponent(text)}`);

        if (!bratResponse.ok) {
            throw new Error(`Gagal membuat gambar Brat: ${bratResponse.status}`);
        }

        // Unduh file gambar hasil API
        const imageBuffer = await bratResponse.buffer();

        // Simpan file sementara di direktori sistem
        const tempPath = join(tmpdir(), 'brat_image.png');
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
            error: 'Gagal membuat gambar Brat atau mengunggah ke GitHub',
        };
    }
}

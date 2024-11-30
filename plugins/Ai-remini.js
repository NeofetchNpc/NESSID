import fetch from 'node-fetch';
import { promises as fs } from 'fs';
import { tmpdir } from 'os';
import { join } from 'path';

export async function enhanceImageWithRemini(imageUrl) {
    try {
        // Panggil API untuk memproses gambar menggunakan Remini dengan URL yang diberikan
        const reminiResponse = await fetch(`https://api.neastooid.xyz/api/ai/remini?url=${encodeURIComponent(imageUrl)}`);

        if (!reminiResponse.ok) {
            throw new Error(`Gagal memproses gambar dengan Remini: ${reminiResponse.status}`);
        }

        // Unduh file gambar hasil API
        const imageBuffer = await reminiResponse.buffer();

        // Simpan file sementara di direktori sistem
        const tempPath = join(tmpdir(), 'enhanced_image.png');
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
            error: 'Gagal memproses gambar dengan Remini atau mengunggah ke GitHub',
        };
    }
}

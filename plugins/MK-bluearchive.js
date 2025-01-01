import baLogoGenerator from 'ba-logo';
import fetch from 'node-fetch';
import { promises as fs } from 'fs';
import { tmpdir } from 'os';
import { join } from 'path';

export async function BaLogo(text) {
    try {
        // Generate logo menggunakan 'ba-logo' dengan teks yang diberikan
        const image = await baLogoGenerator(text);

        // Tentukan path file output di direktori sementara
        const tempPath = join(tmpdir(), `${text.replace(/\s+/g, '_')}.png`);
        await image.toFile(tempPath);

        // Baca file sebagai buffer untuk upload
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
                url: uploadResult.url, // URL raw GitHub dari respons API upload
            },
        };
    } catch (error) {
        console.error('Error:', error.message);
        return {
            success: false,
            error: 'Gagal membuat logo dengan ba-logo atau mengunggah ke GitHub',
        };
    }
}

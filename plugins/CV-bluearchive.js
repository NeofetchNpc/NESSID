import baLogoGenerator from 'ba-logo';
import fetch from 'node-fetch';
import { createReadStream } from 'fs';

export async function baLogo(text) {
    try {
        // Generate logo menggunakan 'ba-logo' dengan teks yang diberikan
        const image = await baLogoGenerator(text);

        // Tentukan path file output
        const filePath = `${text.replace(/\s+/g, '_')}.png`;
        await image.toFile(filePath);

        // Baca file sebagai stream untuk upload
        const fileStream = createReadStream(filePath);

        // Unggah file ke API upload
        const uploadResponse = await fetch('https://www.neastooid.xyz/api/upload', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/octet-stream'
            },
            body: fileStream
        });

        if (!uploadResponse.ok) {
            throw new Error(`Gagal mengunggah file: ${uploadResponse.status}`);
        }

        // Ambil respons JSON dari API upload
        const uploadResult = await uploadResponse.json();

        if (!uploadResult.url) {
            throw new Error('URL tidak ditemukan dalam respons upload');
        }

        // Ubah URL menjadi format CDN
        const cdnUrl = uploadResult.url.replace(
            /^https:\/\/raw\.githubusercontent\.com\/NeofetchNpc\/ArchiveTMP\/main\//,
            'https://cdn.neastooid.xyz/'
        );

        // Kembalikan hasil sebagai objek
        return {
            success: true,
            results: {
                cdnUrl
            }
        };
    } catch (error) {
        console.error('Error:', error.message);
        return {
            success: false,
            error: 'Gagal membuat logo dengan ba-logo atau mengunggah ke CDN'
        };
    }
}

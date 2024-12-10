// DOWNLOADER
import fetch from 'node-fetch';

export default async function YouTubeSearch(query) {
    try {
        const apiUrl = `https://api.neastooid.xyz/api/tools/yts?q=${encodeURIComponent(query)}`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();
        return data; 
    } catch (error) {
        console.error('Error:', error.message);
        return {
            success: false,
            results: [],
            error: 'Error dalam mendapatkan data dari API YouTube',
        };
    }
}

// MAKER CANVAS
import baLogoGenerator from 'ba-logo';
import { promises as fs } from 'fs';
import { tmpdir } from 'os';
import { join } from 'path';

export default async function baLogo(text) {
    try {
        // Generate logo menggunakan 'ba-logo' dengan teks yang diberikan
        const image = await baLogoGenerator(text);

        // Tentukan path file di direktori sementara
        const tempPath = join(tmpdir(), `${text.replace(/\s+/g, '_')}.png`);

        // Simpan file di direktori sementara
        await image.toFile(tempPath);

        // Kembalikan path file sementara sebagai hasil
        return {
            success: true,
            results: {
                tempPath, // Lokasi file sementara di direktori tmp
            },
        };
    } catch (error) {
        console.error('Error:', error.message);
        return {
            success: false,
            error: 'Gagal membuat logo dengan ba-logo',
        };
    }
}

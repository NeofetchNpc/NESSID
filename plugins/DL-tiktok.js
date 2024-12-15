import fetch from 'node-fetch';

export async function TiktokDL(url) {
    try {
        const apiUrl = `https://api.neastooid.xyz/api/downloader/tiktokdl?url=${encodeURIComponent(url)}`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const result = await response.json();
        return result; // Mengembalikan JSON langsung tanpa modifikasi
    } catch (error) {
        console.error('Error:', error.message);
        return {
            success: false,
            error: 'Error dalam mendapatkan data dari API TikTok downloader'
        };
    }
}

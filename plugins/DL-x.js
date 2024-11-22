import fetch from 'node-fetch';

export async function twitterDownloader(url) {
    try {
        const apiUrl = `https://api.neastooid.xyz/api/downloader/x?url=${encodeURIComponent(url)}`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();
        return data; // Mengembalikan JSON langsung tanpa modifikasi
    } catch (error) {
        console.error('Error:', error.message);
        return {
            success: false,
            error: 'Error dalam mendapatkan data dari API Twitter downloader'
        };
    }
}

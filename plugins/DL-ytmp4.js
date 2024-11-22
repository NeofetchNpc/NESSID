import fetch from 'node-fetch';

export async function ytbmp4downloader(url) {
    try {
        const apiUrl = `https://api.neastooid.xyz/api/downloader/ytmp4?url=${encodeURIComponent(url)}`;
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
            error: 'Error dalam mendapatkan data dari API YouTube MP4 downloader'
        };
    }
}

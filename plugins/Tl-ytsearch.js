import fetch from 'node-fetch';

export async function YouTubeSearch(query) {
    try {
        const apiUrl = `https://api.neastooid.xyz/api/tools/yts?q=${encodeURIComponent(query)}`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();
        return data;  // Mengembalikan JSON langsung tanpa modifikasi
    } catch (error) {
        console.error('Error:', error.message);
        return {
            success: false,
            results: [],
            error: 'Error dalam mendapatkan data dari API YouTube',
        };
    }
}

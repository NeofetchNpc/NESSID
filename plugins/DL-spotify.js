import fetch from 'node-fetch';

export async function SpotifyDL(url) {
    try {
        const apiUrl = `https://api.ryzendesu.vip/api/downloader/spotify?url=${encodeURIComponent(url)}`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();

        // Langsung mengembalikan JSON dari API jika sukses
        if (data.success) {
            return data; // Respons JSON asli dari API
        } else {
            throw new Error(data.message || 'Gagal mendapatkan data dari API Spotify downloader');
        }
    } catch (error) {
        console.error('Error:', error.message);
        return {
            success: false,
            message: 'Error dalam mendapatkan data dari API Spotify downloader',
            error: error.message
        };
    }
}

import fetch from 'node-fetch';

export async function SpotifyDL(url) {
    try {
        const apiUrl = `https://api.neastooid.xyz/api/downloader/spotifydl?url=${encodeURIComponent(url)}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.success) {
            const metadata = data.metadata || {};

            return {
                audioUrl: data.link,
                title: metadata.title || "No title available",
                artist: metadata.artists || "Unknown artist",
                album: metadata.album || "Unknown album",
                cover: metadata.cover || null,
                duration: "Unknown duration", // Durasi tidak disertakan dalam respons JSON
                releaseDate: metadata.releaseDate || "Unknown release date",
            };
        } else {
            throw new Error('Gagal mendapatkan audio dari API Spotify downloader');
        }
    } catch (error) {
        console.error('Error:', error.message);
        return {
            audioUrl: null,
            title: null,
            artist: null,
            album: null,
            cover: null,
            duration: null,
            releaseDate: null,
            error: 'Error dalam mendapatkan data dari API Spotify downloader'
        };
    }
}

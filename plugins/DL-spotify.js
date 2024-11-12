import fetch from 'node-fetch';

export async function SpotifyDL(url) {
    try {
        const apiUrl = `https://api.neastooid.xyz/api/downloader/spotifydl?url=${encodeURIComponent(url)}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.success) {
            return {
                audioUrl: data.audioUrl,
                title: data.title || "No title available",
                artist: data.artist || "Unknown artist",
                album: data.album || "Unknown album",
                duration: data.duration || "Unknown duration",
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
            duration: null,
            error: 'Error dalam mendapatkan data dari API Spotify downloader'
        };
    }
}

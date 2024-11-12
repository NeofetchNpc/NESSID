import fetch from 'node-fetch';

export async function downloadTikTokVideo(url) {
    try {
        const apiUrl = `https://api.neastooid.xyz/api/downloader/tiktokdl?url=${encodeURIComponent(url)}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.success) {
            return {
                videoUrl: data.videoUrl,
                description: data.description || "No description available.",
                author: data.author || "Unknown"
            };
        } else {
            throw new Error('Gagal mendapatkan video dari API');
        }
    } catch (error) {
        console.error('Error:', error.message);
        return {
            videoUrl: null,
            description: null,
            author: null,
            error: 'Error dalam mendapatkan data dari API TikTok downloader'
        };
    }
}

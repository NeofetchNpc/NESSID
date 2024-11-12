import fetch from 'node-fetch';

export async function ytbmp3downloader(url) {
    try {
        const apiUrl = `https://api.neastooid.xyz/api/downloader/ytmp3?url=${encodeURIComponent(url)}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.success) {
            return {
                audioUrl: data.audioUrl,
                title: data.title || "No title available.",
                duration: data.duration || "Unknown duration"
            };
        } else {
            throw new Error('Gagal mendapatkan audio dari API');
        }
    } catch (error) {
        console.error('Error:', error.message);
        return {
            audioUrl: null,
            title: null,
            duration: null,
            error: 'Error dalam mendapatkan data dari API YouTube MP3 downloader'
        };
    }
}

export async function ytbmp4downloader(url) {
    try {
        const apiUrl = `https://api.neastooid.xyz/api/downloader/ytmp4?url=${encodeURIComponent(url)}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.success) {
            return {
                videoUrl: data.videoUrl,
                title: data.title || "No title available.",
                resolution: data.resolution || "Unknown resolution"
            };
        } else {
            throw new Error('Gagal mendapatkan video dari API');
        }
    } catch (error) {
        console.error('Error:', error.message);
        return {
            videoUrl: null,
            title: null,
            resolution: null,
            error: 'Error dalam mendapatkan data dari API YouTube MP4 downloader'
        };
    }
}

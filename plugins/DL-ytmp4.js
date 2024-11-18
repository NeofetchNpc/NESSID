import fetch from 'node-fetch';

export async function ytbmp4downloader(url) {
    try {
        const apiUrl = `https://api.neastooid.xyz/api/downloader/ytmp4?url=${encodeURIComponent(url)}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status === "tunnel") {
            return {
                videoUrl: data.url,
                filename: data.filename || "Unknown filename"
            };
        } else {
            throw new Error('Gagal mendapatkan video dari API');
        }
    } catch (error) {
        console.error('Error:', error.message);
        return {
            videoUrl: null,
            filename: null,
            error: 'Error dalam mendapatkan data dari API YouTube MP4 downloader'
        };
    }
}

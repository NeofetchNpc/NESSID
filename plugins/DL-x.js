import fetch from 'node-fetch';

export async function twitterDownloader(url) {
    try {
        const apiUrl = `https://api.neastooid.xyz/api/downloader/x?url=${encodeURIComponent(url)}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.success) {
            return {
                mediaUrl: data.mediaUrl,
                type: data.type || "Unknown type",
                caption: data.caption || "No caption available",
            };
        } else {
            throw new Error('Gagal mendapatkan media dari API Twitter downloader');
        }
    } catch (error) {
        console.error('Error:', error.message);
        return {
            mediaUrl: null,
            type: null,
            caption: null,
            error: 'Error dalam mendapatkan data dari API Twitter downloader'
        };
    }
}

import fetch from 'node-fetch';

export async function twitterDownloader(url) {
    try {
        const apiUrl = `https://api.neastooid.xyz/api/downloader/x?url=${encodeURIComponent(url)}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status && Array.isArray(data.media) && data.media.length > 0) {
            // Ambil media pertama dari array
            const mediaUrl = data.media[0];

            return {
                mediaUrl: mediaUrl,
                type: data.type || "Unknown type",  // Gunakan type dari API atau default ke "Unknown type"
                caption: "No caption available",    // Placeholder untuk caption jika tidak ada
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

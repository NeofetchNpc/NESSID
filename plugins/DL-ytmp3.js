import fetch from 'node-fetch';

export async function ytbmp3downloader(url) {
    try {
        const apiUrl = `https://api.neastooid.xyz/api/downloader/ytmp3?url=${encodeURIComponent(url)}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status === "tunnel") {
            return {
                audioUrl: data.url,
                filename: data.filename || "Unknown filename"
            };
        } else {
            throw new Error('Gagal mendapatkan audio dari API');
        }
    } catch (error) {
        console.error('Error:', error.message);
        return {
            audioUrl: null,
            filename: null,
            error: 'Error dalam mendapatkan data dari API YouTube MP3 downloader'
        };
    }
}

import fetch from 'node-fetch';

export async function InstagramDL(url) {
    try {
        const apiUrl = `https://api.neastooid.xyz/api/downloader/igdl?url=${encodeURIComponent(url)}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.success && Array.isArray(data.data) && data.data.length > 0) {
            // Ambil media pertama dari array
            const media = data.data[0];

            return {
                mediaUrl: media.url,
                thumbnail: media.thumbnail,
                type: "image", // Tentukan jenis konten; update sesuai kebutuhan API jika ada info lebih detail
                caption: "No caption available", // Placeholder jika tidak ada caption dalam API
            };
        } else {
            throw new Error('Gagal mendapatkan media dari API Instagram downloader');
        }
    } catch (error) {
        console.error('Error:', error.message);
        return {
            mediaUrl: null,
            thumbnail: null,
            type: null,
            caption: null,
            error: 'Error dalam mendapatkan data dari API Instagram downloader',
        };
    }
}

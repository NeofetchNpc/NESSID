import fetch from 'node-fetch';

export async function charAnimeInfo(query) {
    try {
        const apiUrl = `https://api.neastooid.xyz/api/anime/charanimeinfo?query=${encodeURIComponent(query)}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data) {
            return {
                title: data.title || '',
                url: data.url || '',
                type: data.type || '',
                score: data.score || 0,
                members: data.members || 0,
                status: data.status || '',
                synopsis: data.synopsis || '',
                favorites: data.favorites || 0,
                image: {
                    jpg: data.images?.jpg?.image_url || '',
                    smallJpg: data.images?.jpg?.small_image_url || '',
                    largeJpg: data.images?.jpg?.large_image_url || '',
                    webp: data.images?.webp?.image_url || '',
                    smallWebp: data.images?.webp?.small_image_url || '',
                    largeWebp: data.images?.webp?.large_image_url || ''
                },
                genres: data.genres || '',
            };
        } else {
            throw new Error('Gagal mendapatkan data dari API CharAnimeInfo');
        }
    } catch (error) {
        console.error('Error:', error.message);
        return {
            error: 'Error dalam mendapatkan data dari API CharAnimeInfo',
        };
    }
}

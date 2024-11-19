import fetch from 'node-fetch';

export async function YouTubeSearch(query) {
    try {
        const apiUrl = `https://api.neastooid.xyz/api/tools/yts?q=${encodeURIComponent(query)}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.videos && data.videos.length > 0) {
            return {
                success: true,
                results: data.videos,
                count: data.videos.length,
            };
        } else {
            throw new Error('Gagal mendapatkan video dari API YouTube');
        }
    } catch (error) {
        console.error('Error:', error.message);
        return {
            success: false,
            results: [],
            error: 'Error dalam mendapatkan data dari API YouTube',
        };
    }
}

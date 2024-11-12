import fetch from 'node-fetch';

export async function nhentaiSearch(query) {
    try {
        const apiUrl = `https://api.neastooid.xyz/api/anime/nhentai?q=${encodeURIComponent(query)}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.success) {
            return {
                results: data.results || [],
                total: data.total || 0,
            };
        } else {
            throw new Error('Gagal mendapatkan hasil pencarian dari API NHentai');
        }
    } catch (error) {
        console.error('Error:', error.message);
        return {
            results: [],
            total: 0,
            error: 'Error dalam mendapatkan data dari API NHentai'
        };
    }
}

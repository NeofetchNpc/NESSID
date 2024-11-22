import fetch from 'node-fetch';

export async function nhentaiSearch(query) {
    try {
        const apiUrl = `https://api.neastooid.xyz/api/anime/nhentai?q=${encodeURIComponent(query)}`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();
        return data;  // Mengembalikan JSON langsung tanpa modifikasi
    } catch (error) {
        console.error('Error:', error.message);
        return {
            results: [],
            total: 0,
            error: 'Error dalam mendapatkan data dari API NHentai'
        };
    }
}

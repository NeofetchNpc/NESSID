import fetch from 'node-fetch';

export async function nhentaiSearch(query) {
    try {
        const apiUrl = `https://api.neastooid.xyz/api/anime/nhentai?q=${encodeURIComponent(query)}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data && Array.isArray(data) && data.length > 0) {
            // Format hasil sesuai dengan keinginan Anda, dengan objek 'results' yang berisi gambar
            const results = data.map(item => ({
                title: item.title,
                imgSrc: item.imgSrc,
                link: item.link
            }));

            return {
                results: results,
                total: results.length,
                error: null
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

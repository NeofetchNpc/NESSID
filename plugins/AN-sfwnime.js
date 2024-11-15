import fetch from 'node-fetch';

export async function sfwAnime() {
    try {
        const apiUrl = `https://api.neastooid.xyz/api/anime/sfw-anime`;
        const response = await fetch(apiUrl);
        
        // Periksa status HTTP
        if (!response.ok) {
            throw new Error(`Failed to fetch, status: ${response.status}`);
        }

        const data = await response.json();

        console.log('API Response:', data); // Log respons untuk debugging

        if (data.success) {
            return {
                results: data.results || [],
                total: data.total || 0,
            };
        } else {
            throw new Error('Gagal mendapatkan hasil dari API SFW Anime');
        }
    } catch (error) {
        console.error('Error:', error.message);
        return {
            results: [],
            total: 0,
            error: 'Error dalam mendapatkan data dari API SFW Anime',
        };
    }
}

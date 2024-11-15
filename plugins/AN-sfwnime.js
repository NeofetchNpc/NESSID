import fetch from 'node-fetch';

export async function sfwAnime() {
    try {
        const apiUrl = `https://api.neastooid.xyz/api/anime/sfw-anime`;
        const response = await fetch(apiUrl);
        
        // Pastikan status respons 200 OK
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Ambil data JSON dari API
        const data = await response.json();

        // Log respons API untuk memastikan struktur data
        console.log('API Response:', data);

        // Pastikan data memiliki properti yang diinginkan
        if (data.success && Array.isArray(data.results)) {
            return {
                results: data.results || [],
                total: data.total || 0,
            };
        } else {
            throw new Error('Data tidak valid atau tidak lengkap');
        }
    } catch (error) {
        console.error('Error:', error.message);
        return {
            results: [],
            total: 0,
            error: 'Gagal mengambil data dari API SFW Anime',
        };
    }
}

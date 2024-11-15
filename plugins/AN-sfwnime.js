import fetch from 'node-fetch';

export async function sfwAnime() {
    try {
        const apiUrl = `https://api.neastooid.xyz/api/anime/sfw-anime`;
        const response = await fetch(apiUrl);

        // Pastikan status HTTP 200
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Ambil data JSON dari API
        const data = await response.json();

        console.log('API Response:', data); // Log respons API

        // Cek apakah data memiliki properti url, artinya data valid
        if (data.url) {
            return {
                results: [{ image_url: data.url }],
                total: 1,
                error: null
            };
        } else {
            throw new Error('Data tidak valid atau tidak lengkap');
        }
    } catch (error) {
        console.error('Error:', error.message);
        return {
            results: [],
            total: 0,
            error: 'Gagal mengambil data dari API SFW Anime'
        };
    }
}

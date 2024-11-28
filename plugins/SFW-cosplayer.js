import fetch from 'node-fetch';

export async function sfwCosplayerV3() {
    try {
        const apiUrl = `https://cosplay.neastooid.xyz/api/cosplay`;
        const response = await fetch(apiUrl);

        // Pastikan status HTTP 200
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Ambil data JSON dari API
        const data = await response.json();

        // Cek apakah data memiliki properti url, artinya data valid
        if (data.url) {
            return {
                results: data.url  // Ganti array menjadi objek
            };
        } else {
            throw new Error('Data tidak valid atau tidak lengkap');
        }
    } catch (error) {
        console.error('Error:', error.message);
        return {
            results: {},
            total: 0,
            error: 'Gagal mengambil data dari API SFW Anime'
        };
    }
}
import fetch from 'node-fetch';

export async function sfwMilfV1() {
    try {
        const apiUrl = `https://api.neastooid.xyz/api/anime/waifuv1?included_tags=milf`;
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

import fetch from 'node-fetch';

export async function sfwLoliconV3() {
    try {
        const apiUrl = `https://api.neastooid.xyz/api/anime/loli`;
        const response = await fetch(apiUrl);

        // Pastikan status HTTP 200
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Ambil data JSON dari API dan kembalikan langsung
        const data = await response.json();

        return {
            results: data,  // Kembalikan seluruh data JSON dari API
            error: null  // Tidak ada error
        };
    } catch (error) {
        console.error('Error:', error.message);
        return {
            results: {},
            error: error.message || 'Gagal mengambil data dari API SFW Anime'
        };
    }
}

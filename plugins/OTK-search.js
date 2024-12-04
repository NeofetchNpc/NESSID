import fetch from 'node-fetch';

export async function searchOtakuSource(query) {
    try {
        // Panggil API untuk mencari otaku-src berdasarkan search query yang diberikan
        const response = await fetch(`https://api.neastooid.xyz/api/streaming/otaku-search?q=${encodeURIComponent(query)}`);

        if (!response.ok) {
            throw new Error(`Gagal mendapatkan hasil pencarian: ${response.status}`);
        }

        // Ambil data JSON dari API
        const jsonData = await response.json();

        // Periksa jika ada hasil dari pencarian
        if (!jsonData || jsonData.length === 0) {
            throw new Error('Tidak ada hasil ditemukan');
        }

        // Kembalikan hasil pencarian
        return {
            success: true,
            results: jsonData,
        };
    } catch (error) {
        console.error('Error:', error.message);
        return {
            success: false,
            error: 'Gagal mencari data dari otaku-src API',
        };
    }
}

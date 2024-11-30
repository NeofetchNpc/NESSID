import fetch from 'node-fetch';

export async function downloadOtakuEpisode(episodeId) {
    try {
        // Panggil API untuk mendapatkan data episode berdasarkan episode ID
        const response = await fetch(`https://api.neastooid.xyz/api/streaming/otaku-ep?id=${encodeURIComponent(episodeId)}`);

        if (!response.ok) {
            throw new Error(`Gagal mendapatkan data episode: ${response.status}`);
        }

        // Ambil seluruh data JSON dari API
        const jsonData = await response.json();

        // Kembalikan seluruh data JSON dari respon API
        return {
            success: true,
            results: jsonData,  // Seluruh JSON respons
        };
    } catch (error) {
        console.error('Error:', error.message);
        return {
            success: false,
            error: 'Gagal mengunduh episode atau mendapatkan data',
        };
    }
}

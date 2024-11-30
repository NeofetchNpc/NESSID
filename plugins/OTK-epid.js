import fetch from 'node-fetch';

export async function downloadOtakuEpisode(episodeId) {
    try {
        // Panggil API untuk mendapatkan data episode berdasarkan episode ID
        const response = await fetch(`https://api.neastooid.xyz/api/streaming/otaku-ep?id=${encodeURIComponent(episodeId)}`);

        if (!response.ok) {
            throw new Error(`Gagal mendapatkan data episode: ${response.status}`);
        }

        // Langsung kembalikan hasil JSON dari respons API
        return await response.json();
    } catch (error) {
        console.error('Error:', error.message);
        return {
            success: false,
            error: 'Gagal mengunduh episode atau mendapatkan data',
        };
    }
}

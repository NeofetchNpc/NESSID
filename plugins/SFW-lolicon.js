import fetch from 'node-fetch';

export async function sfwLoliconV3() {
    try {
        const apiUrl = `https://api.neastooid.xyz/api/anime/loli`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Langsung kembalikan JSON respons dari API
        return await response.json();
    } catch (error) {
        console.error('Error:', error.message);
        return { error: error.message || 'Gagal mengambil data dari API SFW Anime' };
    }
}

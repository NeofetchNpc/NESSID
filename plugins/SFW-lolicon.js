import fetch from 'node-fetch';

export async function sfwLoliconV3() {
    try {
        const apiUrl = `https://api.neastooid.xyz/api/anime/loli`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        
        // Memastikan bahwa urls adalah objek yang memiliki properti 'original'
        data.data.forEach(item => {
            if (item.urls && item.urls.original) {
                item.urls = item.urls.original; // Ambil URL asli
            } else {
                item.urls = null; // Atau null jika tidak ada URL
            }
        });

        return data;
    } catch (error) {
        console.error('Error:', error.message);
        return { error: error.message || 'Gagal mengambil data dari API SFW Anime' };
    }
}

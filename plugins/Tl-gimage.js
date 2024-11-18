import fetch from 'node-fetch';

export async function gimage(query) {
    try {
        const url = `https://api.neastooid.xyz/api/tools/gimage?q=${encodeURIComponent(query)}`;
        const response = await fetch(url);
        const data = await response.json();

        if (Array.isArray(data) && data.length > 0) {
            return data.map((item) => ({
                title: item.title || "No title available",
                url: item.url || "No URL available",
                image: item.image || "No image available"
            }));
        } else {
            throw new Error('Gambar tidak ditemukan untuk kueri ini.');
        }
    } catch (error) {
        console.error('Error:', error.message);
        return [
            {
                title: null,
                url: null,
                image: null,
                error: 'Error dalam mendapatkan data dari API gimage'
            }
        ];
    }
}

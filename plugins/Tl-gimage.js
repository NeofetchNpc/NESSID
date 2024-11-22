import fetch from 'node-fetch';

export async function gimage(query) {
    try {
        const url = `https://api.neastooid.xyz/api/tools/gimage?q=${encodeURIComponent(query)}`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();
        return data;  // Mengembalikan JSON langsung tanpa modifikasi
    } catch (error) {
        console.error('Error:', error.message);
        return {
            success: false,
            error: 'Error dalam mendapatkan data dari API gimage'
        };
    }
}

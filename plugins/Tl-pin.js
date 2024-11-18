import fetch from 'node-fetch';

export async function PinterestSearch(query) {
    try {
        const apiUrl = `https://api.neastooid.xyz/api/tools/pin?q=${encodeURIComponent(query)}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.results && data.results.length > 0) {
            return {
                success: true,
                results: data.results,
                count: data.results.length,
            };
        } else {
            throw new Error('Gagal mendapatkan gambar dari API Pinterest');
        }
    } catch (error) {
        console.error('Error:', error.message);
        return {
            success: false,
            results: [],
            error: 'Error dalam mendapatkan data dari API Pinterest',
        };
    }
}

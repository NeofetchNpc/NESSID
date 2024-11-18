import fetch from 'node-fetch';

export async function gemini(prompt) {
    try {
        const url = `https://api.neastooid.xyz/api/ai/gemini?prompt=${encodeURIComponent(prompt)}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.success) {
            return data.response;
        } else {
            throw new Error('Gagal mendapatkan respons dari API');
        }
    } catch (error) {
        console.error('Error:', error.message);
        return 'Error dalam mendapatkan data';
    }
}

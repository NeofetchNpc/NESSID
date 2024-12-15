import axios from 'axios';

export default async function chatGPT(prompt) {
    try {
        const url = `https://api.neastooid.xyz/api/ai/gemini?text=${encodeURIComponent(prompt)}`;
        const response = await axios.get(url);

        if (response.data.success) {
            return response.data.response;
        } else {
            throw new Error('Gagal mendapatkan respons dari API');
        }
    } catch (error) {
        console.error('Error:', error.message);
        return 'Error dalam mendapatkan data';
    }
}

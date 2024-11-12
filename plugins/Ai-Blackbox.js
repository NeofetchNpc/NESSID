import fetch from 'node-fetch';

export async function blackBoxChat(chat) {
    try {
        const url = `https://api.neastooid.xyz/api/ai/blackbox?chat=${encodeURIComponent(chat)}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.response) {
            return {
                message: data.response,
                additionalInfo: data.additionalInfo
            };
        } else {
            throw new Error('Gagal mendapatkan respons dari API');
        }
    } catch (error) {
        console.error('Error:', error.message);
        return {
            message: 'Error dalam mendapatkan data',
            additionalInfo: []
        };
    }
}

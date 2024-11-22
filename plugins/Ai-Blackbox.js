import fetch from 'node-fetch';

export async function blackBoxChat(chat) {
    try {
        const url = `https://api.neastooid.xyz/api/ai/blackbox?chat=${encodeURIComponent(chat)}`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();
        return data;  // Mengembalikan JSON langsung tanpa modifikasi
    } catch (error) {
        console.error('Error:', error.message);
        return {
            message: 'Error dalam mendapatkan data',
            additionalInfo: []
        };
    }
}

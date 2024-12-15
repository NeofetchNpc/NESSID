import axios from 'axios';
import fs from 'fs';
import path from 'path';

export async function chatGPT(prompt) {
    // Membaca nama author dari package.json
    const packageJsonPath = path.resolve(process.cwd(), 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
    const creator = packageJson.author;

    try {
        const url = `https://api.ryzendesu.vip/api/ai/chatgpt?text=${encodeURIComponent(prompt)}`;
        const response = await axios.get(url);

        if (response.data.success) {
            return {
                success: 200,
                response: response.data.response,
                creator: creator,
            };
        } else {
            throw new Error('Gagal mendapatkan respons dari API');
        }
    } catch (error) {
        // Mengembalikan error hanya dalam bentuk JSON
        return {
            success: 500,
            response: 'Error dalam mendapatkan data',
            creator: creator, // Menampilkan creator dari package.json pada error
        };
    }
}

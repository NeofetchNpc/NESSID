import { chatGPT } from 'neastooid';

(async () => {
    const prompt = "Hi";
    const response = await chatGPT(prompt);

    console.log("Response from chatGPT:", response); // Menampilkan respons di log terminal
})();

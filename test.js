// test.js
import { chatGPT } from 'neastooapi';

(async () => {
    const prompt = "Hi";
    const response = await chatGPT(prompt);

    console.log("Response from chatGPT:", response); // Menampilkan respons ke log
})();

import { chatGPT } from './index.js';

(async () => {
    const prompt = "Hi";
    const response = await chatGPT(prompt);

    console.log("Response from chatGPT:", response); // Menampilkan respons di log terminal
})();

import { sfwAnime } from './index.js';

(async () => {
    const result = await sfeAnime();
    console.log("SFW Anime Results:", result);
})();

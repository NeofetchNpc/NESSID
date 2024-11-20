import { chatGPT } from './index.js';

(async () => {
    const prompt = "Hello, how are you today?";
    const response = await chatGPT(prompt);
    console.log(response);
})();

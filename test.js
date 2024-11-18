import { gemini } from './index.js';

(async () => {
    const prompt = "Hello, how are you today?";
    const response = await gemini(prompt);
    console.log("AI Response:", response);
})();

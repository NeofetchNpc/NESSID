import { gemini } from 'neastooapi';

(async () => {
    const prompt = "Hello, how are you today?";
    const response = await gemini(prompt);
    console.log(response);
})();

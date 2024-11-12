const { chatGPT } = require('./index');

(async () => {
    const prompt = "Hi";
    const response = await chatGPT(prompt);
    console.log(response); // Seharusnya: "Hello! How can I assist you today?"
})();

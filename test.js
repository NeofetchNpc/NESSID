import { generateEmojiAIImage } from './index.js'; 

const data = await generateEmojiAIImage('anime style angry with blush');
console.log(JSON.stringify(data, null, 2));

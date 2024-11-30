import { generateEmojiAIImage } from './index.js'; 

const data = await generateEmojiAIImage('anime angry');
console.log(JSON.stringify(data, null, 2));

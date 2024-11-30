import { generateAttpGif } from './index.js'; 

const data = await generateAttpGif('hallo');
console.log(JSON.stringify(data, null, 2));

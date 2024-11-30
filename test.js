import { generateWaifuImage } from './index.js'; 

const data = await generateWaifuImage('cute anime girl');
console.log(JSON.stringify(data, null, 2));

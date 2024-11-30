import { generateBratImage } from './index.js'; 

const data = await generateBratImage('hallo');
console.log(JSON.stringify(data, null, 2));

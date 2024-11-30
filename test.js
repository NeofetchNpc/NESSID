import { enhanceImageWithRemini } from './index.js'; 

const data = await enhanceImageWithRemini('https://cdn.neastooid.xyz/uploads/1732948736793.jpg');
console.log(JSON.stringify(data, null, 2));

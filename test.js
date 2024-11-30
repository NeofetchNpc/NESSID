import { searchOtakuSource } from './index.js'; 

const data = await searchOtakuSource('date a live');
console.log(JSON.stringify(data, null, 2));

import { generateAttpGif } from './index.js'; // Sesuaikan dengan lokasi module Anda

const data = await generateAttpGif('hallo');
console.log(JSON.stringify(data, null, 2));

import { generateWantedPoster } from './index.js'; // Sesuaikan dengan lokasi module Anda

const data = await generateWantedPoster('https://cdn.neastooid.xyz/uploads/1732945162827.png');
console.log(JSON.stringify(data, null, 2));

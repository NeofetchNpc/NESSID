import { jadwalSholat } from './index.js'; // Sesuaikan dengan lokasi module Anda

const data = await jadwalSholat('bandung');
console.log(JSON.stringify(data, null, 2));

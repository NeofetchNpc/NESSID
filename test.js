import { jadwalSholat } from './index.js'; // Sesuaikan dengan lokasi module Anda

(async () => {
    const logoText = "bandung";
    const response = await jadwalSholat(logoText);
    console.log(response);
})();

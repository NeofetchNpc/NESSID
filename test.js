import { baLogo } from './index.js'; // Sesuaikan dengan lokasi module Anda

(async () => {
    const logoText = "Kanjut Kanjut";
    const response = await baLogo(logoText);
    console.log(response);
})();

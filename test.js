import { soundCloudDl } from './index.js';

const url = 'https://soundcloud.com/yusup909/dj-untungnya-hidup-harus-tetap?si=85637c28650b4d8a848454900d74e441&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing';

(async () => {
  try {
    const result = await soundCloudDl(url); // Panggil fungsi dengan URL
    console.log('Result:', result); // Tampilkan hasilnya
  } catch (error) {
    console.error('Error:', error.message); // Tangkap dan tampilkan error
  }
})();

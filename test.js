import { bStationDL } from './plugins/DL-bli.js';  // Sesuaikan dengan path plugin yang benar

(async () => {
  try {
    const url = 'https://www.bilibili.tv/id/video/2043082458?bstar_from=bstar-web.ugc-video-detail.related-recommend.all';
    const result = await bStationDL(url);

    // Menggunakan JSON.stringify untuk melihat hasilnya dalam format yang lebih mudah dibaca
    console.log(JSON.stringify(result, null, 2));  // Menampilkan hasil sebagai string JSON yang diformat
  } catch (error) {
    console.error('Error:', error.message);
  }
})();

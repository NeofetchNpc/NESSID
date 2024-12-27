import { bStationDL } from './plugins/DL-bli.js'; // Sesuaikan path sesuai lokasi file

(async () => {
  try {
    // URL Bilibili yang valid
    const url = 'https://www.bilibili.tv/id/video/2043082458?bstar_from=bstar-web.ugc-video-detail.related-recommend.all';
    const result = await bStationDL(url);

    console.log('Success:', result); // Output hasil dari API jika berhasil
  } catch (error) {
    console.error('Error:', error.message); // Output error jika terjadi kesalahan
  }
})();

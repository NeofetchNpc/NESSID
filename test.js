import nessid from './index.js';

const url = 'https://www.bilibili.tv/id/video/2043082458?bstar_from=bstar-web.ugc-video-detail.related-recommend.all';

nessid.bStationDL(url)
  .then(result => {
    console.log(JSON.stringify(result, null, 2));
  })
  .catch(error => {
    console.error('Terjadi kesalahan:', error);
  });

import nessid from './index.js';

nessid.bStationDL('https://www.bilibili.tv/id/video/2043082458?bstar_from=bstar-web.ugc-video-detail.related-recommend.all')
  .then(result => console.log(result))
  .catch(error => console.error(error));

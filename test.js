import nessid from './index.js';

(async () => {
    const testing = await nessid.bStationDL('https://www.bilibili.tv/id/video/2043082458?bstar_from=bstar-web.ugc-video-detail.related-recommend.all');
    console.log(testing);
})();

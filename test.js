import nessid from './index.js';

const url = 'https://www.tiktok.com/@yusupkaku/video/7450672111032503557';

nessid.TiktokDL(url)
  .then(result => {
    console.log(JSON.stringify(result, null, 2));
  })

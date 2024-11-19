import { twitterDownloader } from './index.js';

(async () => {
    const twitterUrl = "https://x.com/Luna_Stellaris/status/1858682555324621155?t=88S6IWLOs3-oNcbd6DunEQ&s=19"; 
    const response = await twitterDownloader(twitterUrl);

    console.log("Response from Twitter Downloader:", response); 
})();

import { downloadOtakuEpisode } from './index.js';

(async () => {
    const quary = "dddn-episode-9-sub-indo";
    const response = await downloadOtakuEpisode(quary);

    console.log(response); 
})();

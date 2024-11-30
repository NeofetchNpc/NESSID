import { downloadOtakuEpisode } from './index.js';

(async () => {
    const quary = "date-live-v-sub-indo";
    const response = await downloadOtakuEpisode(quary);

    console.log(response); 
})();

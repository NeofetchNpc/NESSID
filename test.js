import { downloadOtakuEpisode } from './index.js'; 

const data = await downloadOtakuEpisode('date-live-v-sub-indo');
console.log(JSON.stringify(data, null, 2));

import { downloadOtakuEpisode } from './index.js'; 

const data = await downloadOtakuEpisode('dddn-episode-9-sub-indo');
console.log(JSON.stringify(data, null, 2));

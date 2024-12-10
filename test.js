/*import { downloadOtakuEpisode } from './index.js'; 

const data = await downloadOtakuEpisode('dddn-episode-9-sub-indo');
console.log(JSON.stringify(data, null, 2));
*/

import chatGPT from './index.js';

const result = await chatGPT('Hello, ChatGPT!');
console.log(result);

/*import { downloadOtakuEpisode } from './index.js'; 

const data = await downloadOtakuEpisode('dddn-episode-9-sub-indo');
console.log(JSON.stringify(data, null, 2));
*/

import { baLogo } from './index.js';

(async () => {
    const logoText = "Kanjut Kanjut";
    const response = await baLogo(logoText);
    console.log(response);
})();

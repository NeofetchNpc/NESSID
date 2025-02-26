/*import nessid from './index.js';

nessid.GptAi('halo')
  .then(result => console.log(result));
*/

import nessid from './index.js';

const url = 'https://youtu.be/eTplxWaAD8o?si=GRa-e-30EtmOpBOv'; // url yt
const type = 'audio'; // audio or video

nessid.youtubeAIO(url, type)
  .then(result => console.log(result))
  .catch(error => console.error('Error:', error.message));

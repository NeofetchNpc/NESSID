/*import nessid from './index.js';

nessid.GptAi('halo')
  .then(result => console.log(result));
*/

import nessid from './index.js';

const url = 'https://youtube.com/watch?v=EXAMPLE_ID'; // url yt
const type = 'video'; // audio or video

nessid.youtubeAIO(url, type)
  .then(result => console.log(result))
  .catch(error => console.error('Error:', error.message));

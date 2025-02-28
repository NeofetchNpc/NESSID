/*import nessid from './index.js';

nessid.GptAi('halo')
  .then(result => console.log(result));
*/

import nessid from './index.js';

nessid.youtubeAIO('https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'audio')
  .then(console.log)
  .catch(error => console.error('Error:', error.message));

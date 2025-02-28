/*import nessid from './index.js';

nessid.GptAi('halo')
  .then(result => console.log(result));
*/

import nessid from './index.js';

const { youtubeAIO } = nessid; // Mengimpor youtubeAIO dari nessid

(async () => {
  try {
    const result = await youtubeAIO('https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'audio');
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
})();

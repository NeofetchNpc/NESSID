/*
import nessid from './index.js';

nessid.SimiAi('haloo')
  .then(result => console.log(result));
*/

/*import nessid from './index.js';

nessid.ytmp3DL('https://youtu.be/SDFIvvHzBeQ?si=5d6IuqoId-agyitP')
  .then(result => console.log(result));
*/

import nessid from './index.js'; // Import fungsi ytmp3DL

(async () => {
  try {
    // URL video YouTube
    const videoUrl = 'https://youtu.be/TUo_zDKN4bM?si=jBWElayEnBA8WJkW';
    // Kualitas audio (opsional, default: 128)
    const quality = '192';

    // Memanggil fungsi ytmp3DL
    const result = await ytmp3DL(videoUrl, quality);

    // Menampilkan hasil
    console.log('Download Info:', result);
  } catch (error) {
    console.error('Error:', error.message);
  }
})();

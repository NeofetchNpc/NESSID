import { charAnimeInfo } from './index.js';

(async () => {
    const query = "Vermail";
    const response = await charAnimeInfo(query);
    console.log("Character Results:", response);
})();

// MP3
import { ytbmp3downloader } from './index.js';

ytbmp3downloader('https://youtu.be/v37ECJeIjBw?si=xp0jsR6ejdT1hhKf')
    .then(data => console.log('MP3 Data:', data))
    .catch(error => console.error('Error:', error));
// MP4
import { ytbmp4downloader } from './index.js';

ytbmp4downloader('https://youtu.be/v37ECJeIjBw?si=xp0jsR6ejdT1hhKf')
    .then(data => console.log('MP4 Data:', data))
    .catch(error => console.error('Error:', error));

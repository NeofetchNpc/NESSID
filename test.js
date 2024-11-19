// MP3
import { ytbmp3downloader } from 'neastooapi';

ytbmp3downloader('https://youtu.be/v37ECJeIjBw?si=xp0jsR6ejdT1hhKf')
    .then(data => console.log('MP3 Data:', data))
    .catch(error => console.error('Error:', error));

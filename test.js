import { charAnimeInfo } from './index.js';

(async () => {
    const query = "Vermail";
    const response = await charAnimeInfo(query);
    console.log("Character Results:", response);
})();

import { ytbmp3downloader, ytbmp4downloader } from './index.js';

(async () => {
    const youtubeUrl = "https://youtu.be/v37ECJeIjBw?si=xp0jsR6ejdT1hhKf"; // Ganti dengan URL YouTube asli

    const mp3Response = await ytbmp3downloader(youtubeUrl);
    console.log("Response from YouTube MP3 Downloader:", mp3Response);

    const mp4Response = await ytbmp4downloader(youtubeUrl);
    console.log("Response from YouTube MP4 Downloader:", mp4Response);
})();

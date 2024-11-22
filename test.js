/*import { SpotifyDL } from './index.js';

(async () => {
    const spotifyUrl = "https://open.spotify.com/track/1D8kctV7MtI4rWZhbYeaF9?si=3Q2-VQvzSHSGhVso4zRvAg&utm_source=copy-link"; 
    const response = await SpotifyDL(spotifyUrl);

    console.log(response); 
})();

import { bStasionDl } from './index.js';

const url = 'https://www.bilibili.tv/id/video/4793260970610688?bstar_from=bstar-web.homepage.trending.all';

(async () => {
  try {
    const result = await bStasionDl(url);
    console.log(result);
  } catch (error) {
    console.error('Error:', error.message);
  }
})();*/

import { chatGPT } from './index.js';

(async () => {
    const prompt = "Hello, how are you today?";
    const response = await chatGPT(prompt);
    console.log(response);
})();

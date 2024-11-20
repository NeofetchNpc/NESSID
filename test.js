import { SpotifyDL } from './index.js';

(async () => {
    const spotifyUrl = "https://open.spotify.com/track/1D8kctV7MtI4rWZhbYeaF9?si=3Q2-VQvzSHSGhVso4zRvAg&utm_source=copy-link"; 
    const response = await SpotifyDL(spotifyUrl);

    console.log(response); 
})();

import { SpotifyDL } from './index.js';

(async () => {
    const spotifyUrl = "https://open.spotify.com/track/0vPisMufQ5Ht1M5LaUlohP?si=YkBHmqoCSImsF7EKG_ntQw"; 
    const response = await SpotifyDL(spotifyUrl);

    console.log("Response from Spotify Downloader:", response); 
})();

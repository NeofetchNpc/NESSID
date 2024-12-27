import nessid from './index.js';

(async () => {
    const testing = await nessid.bStationDL('https://www.instagram.com/reel/DDrvQO4Se0h/?igsh=MWVpMXVpa2oxYThzNg==');
    console.log(testing);
})();

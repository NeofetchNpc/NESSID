import nessid from 'neastooapi';

(async () => {
    const chatResponse = await nessid.AioDL('https://www.instagram.com/reel/DDrvQO4Se0h/?igsh=MWVpMXVpa2oxYThzNg==');
    console.log(chatResponse);
})();

import nessid from 'neastooapi';

(async () => {
    const chatResponse = await nessid.AioDL('link');
    console.log(chatResponse);
})();

import nessid from './index.js';

(async () => {
    const chatResponse = await nessid.chatGPT('princes connact');
    console.log(chatResponse);
})();

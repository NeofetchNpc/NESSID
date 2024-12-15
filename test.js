import neastooapi from './index.js';

(async () => {
    const chatResponse = await neastooapi.chatGPT('princes connact');
    console.log(chatResponse);
})();

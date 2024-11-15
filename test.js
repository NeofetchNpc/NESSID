import { charAnimeInfo } from './index.js';

(async () => {
    const query = "Vermail";
    const response = await charAnimeInfo(query);
    console.log("Character Results:", response);
})();

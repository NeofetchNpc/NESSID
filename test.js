import { PinterestSearch } from './index.js';

(async () => {
    try {
        const query = "anime";
        const response = await PinterestSearch(query);
        console.log(response);
    } catch (error) {
        console.error('Error:', error.message);
    }
})();

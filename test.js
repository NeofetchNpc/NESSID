import { gimage } from './index.js';

(async () => {
    try {
        const query = "anime";
        const response = await gimage(query);
        console.log(response);
    } catch (error) {
        console.error('Error:', error.message);
    }
})();

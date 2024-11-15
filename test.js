import { nhentaiSearch } from './index.js';

(async () => {
    const query = "Blue Archive";
    const response = await nhentaiSearch(query);
    console.log("Nsearch Results:", response);
})();

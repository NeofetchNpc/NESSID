import { YouTubeSearch } from './index.js';

(async () => {
    try {
        const query = "YUSUP909"; 
        const response = await YouTubeSearch(query); 
        console.log(response); 
    } catch (error) {
        console.error('Error:', error.message); 
    }
})();

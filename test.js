import { pixivSearch } from './index.js';

(async () => {
  try {
    const query = 'anime';
    const results = await pixivSearch(query);
    console.log(results);
  } catch (error) {
    console.error('Error:', error.message);
  }
})();

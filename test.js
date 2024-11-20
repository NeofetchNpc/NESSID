import { allInOneDownload } from './index.js';

(async () => {
  try {
    const url = 'https://soundcloud.com/yusup909/dj-untungnya-hidup-harus-tetap';
    const result = await allInOneDownload(url);
    console.log(result);
  } catch (error) {
    console.error('Error:', error.message);
  }
})();

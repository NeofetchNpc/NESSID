import { mediafireDl } from './index.js';

(async () => {
  try {
    const url = 'https://www.mediafire.com/file/yrdb8o89nt9t0qc/1SoundAbangPilihygMana.mp3/file';
    const data = await mediafireDl(url);
    console.log(data);
  } catch (error) {
    console.error('Error:', error.message);
  }
})();

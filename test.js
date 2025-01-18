/*
import nessid from './index.js';

nessid.SimiAi('haloo')
  .then(result => console.log(result));
*/

import nessid from 'neastooapi';

nessid.ytmp4DL('https://youtu.be/SDFIvvHzBeQ?si=5d6IuqoId-agyitP', '720p')
  .then(result => console.log(result));

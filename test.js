import nessid from './index.js';

const url = 'https://www.facebook.com/share/r/11ashCcxTKh9kPFH/';

nessid.facebookDL(url)
  .then(result => {
    console.log(JSON.stringify(result, null, 2));
  })

import { chatGPT } from './plugins/Ai-ChatGPT.js';
import { aioDown } from './plugins/DL-aio.js';
import { bStasionDl } from './plugins/DL-bli.js';
import { facebookDl } from './plugins/DL-facebook.js';
import { InstagramDL } from './plugins/DL-instagram.js';
import { gdriveDown } from './plugins/DL-gdrive.js';
import { mediafireDl } from './plugins/DL-mediafire.js';
import { soundCloudDl } from './plugins/DL-soundcloud.js';
import { SpotifyDL } from './plugins/DL-spotify.js';
import { TiktokDL } from './plugins/DL-tiktok.js';
import { twitterDl } from './plugins/DL-x.js';
import { ytmp3Dl } from './plugins/DL-ytmp3.js';
import { ytmp4Dl } from './plugins/DL-ytmp4.js';
import { pixivTl } from './plugins/Tl-pixiv.js';

const nessid = {
    chatGPT,
    aioDown,
    bStasionDl,
    facebookDl,
    InstagramDL,
    gdriveDown,
    mediafireDl,
    SpotifyDL,
    TiktokDL,
    twitterDl,
    ytmp3Dl,
    ytmp4Dl,
    pixivTl,
};

export default nessid;

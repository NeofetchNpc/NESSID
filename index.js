import { SoundCloudDl } from './plugins/DL-soundcloud.js';
import { FBDl } from './plugins/DL-facebook.js';
import { IGDl } from './plugins/DL-instagram.js';
import { TTDl } from './plugins/DL-tiktok.js';
import { XDl } from './plugins/DL-x.js';
import { youtubeAIO } from './plugins/DL-ytdl.js';
import { SFWcosplay } from './plugins/ANI-cosplay.js';
import { SFWlolicon } from './plugins/ANI-loli.js';
import { SFWaifu } from './plugins/ANI-waifuv1.js';
import { PinSearch } from './plugins/ANI-pin.js';
import { ANIwallpaper } from './plugins/ANI-wallpaper.js';
import { AiInsfxV2 } from './plugins/AI-insfxv2.js';
import { OTTnew } from './plugins/OTT-new.js';
import { OTTepid } from './plugins/OTT-epid.js';
import { OTTsearch } from './plugins/OTT-search.js';
import { OTTinfo } from './plugins/OTT-info.js';

const nessid = {
  OTTnew,
  OTTepid,
  OTTinfo,
  OTTsearch,
  AiInsfxV2,
  SoundCloudDl,
  FBDl,
  IGDl,
  TTDl,
  XDl,
  youtubeAIO,
  SFWaifu,
  SFWlolicon,
  SFWcosplay,
  PinSearch,
  ANIwallpaper
};

export default nessid;
export const domain = 'https://backend.neastooid.xyz';

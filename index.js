import { SoundCloudDl } from './plugins/DL-soundcloud.js';
import { FBDl } from './plugins/DL-facebook.js';
import { IGDl } from './plugins/DL-instagram.js';
import { MediafireDl } from './plugins/DL-mediafire.js';
import { TTDl } from './plugins/DL-tiktok.js';
import { XDl } from './plugins/DL-x.js';
import { SpotifyDl } from './plugins/DL-spotify.js';
import { youtubeAIO } from './plugins/DL-ytdl.js';
import { SFWcosplay } from './plugins/ANI-cosplay.js';
import { SFWlolicon } from './plugins/ANI-loli.js';
import { SFWaifu } from './plugins/ANI-waifuv1.js';
import { PinSearch } from './plugins/ANI-pin.js';
import { ANIwallpaper } from './plugins/ANI-wallpaper.js';
import { GptAi } from './plugins/AI-gpt4o.js';
import { AiInsfxV2 } from './plugins/AI-insfxv2.js';
import { GdriveDL } from './plugins/DL-gdrive.js';
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
  GptAi,
  GdriveDL,
  SoundCloudDl,
  FBDl,
  IGDl,
  MediafireDl,
  TTDl,
  XDl,
  SpotifyDl,
  youtubeAIO,
  SFWaifu,
  SFWlolicon,
  SFWcosplay,
  PinSearch,
  ANIwallpaper,
};

export default nessid;
export const domain = 'https://backend.neastooid.xyz';

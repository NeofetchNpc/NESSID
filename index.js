import { SoundCloudDl } from './plugins/DL-soundcloud.js';
import { FBDl } from './plugins/DL-facebook.js';
import { IGDl } from './plugins/DL-instagram.js';
import { MediafireDl } from './plugins/DL-mediafire.js';
import { TTDl } from './plugins/DL-tiktok.js';
import { XDl } from './plugins/DL-x.js';
import { YTMP3Dl } from './plugins/DL-ytmp3.js';
import { YTMP4Dl } from './plugins/DL-ytmp4.js';
import { SpotifyDl } from './plugins/DL-spotify.js';
import { SFWcosplay } from './plugins/ANI-cosplay.js';
import { SFWlolicon } from './plugins/ANI-loli.js';
import { SFWaifuv1 } from './plugins/ANI-waifuv1.js';
import { SFWaifuv2 } from './plugins/ANI-waifuv2.js';
import { PinSearch } from './plugins/ANI-pin.js';
import { ANIwallpaper } from './plugins/ANI-wallpaper.js';
import { GptAi } from './plugins/AI-gpt4o.js';
import { BingAi } from './plugins/AI-bing.js';
import { BlackboxAi } from './plugins/AI-blackbox.js';
import { AiInsfxV2 } from './plugins/AI-insfxv2.js';

const nessid = {
  SoundCloudDl,
  FBDl,
  IGDl,
  MediafireDl,
  TTDl,
  XDl,
  YTMP3Dl,
  YTMP4Dl,
  SpotifyDl,
  SFWaifuv1,
  SFWaifuv2,
  SFWlolicon,
  SFWcosplay,
  PinSearch,
  ANIwallpaper,
  GptAi,
  BingAi,
  BlackboxAi,
  AiInsfxV2,
};

export default nessid;
export const domain = 'http://node.neastooid.xyz:2002';
export const domaincp = 'http://node.neastooid.xyz:2003';
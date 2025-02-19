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
import { SFWaifu } from './plugins/ANI-waifuv1.js';
import { PinSearch } from './plugins/ANI-pin.js';
import { ANIwallpaper } from './plugins/ANI-wallpaper.js';
import { GptAi } from './plugins/AI-gpt4o.js';
import { AiInsfxV2 } from './plugins/AI-insfxv2.js';

const nessid = {
  AiInsfxV2,
  GptAi,
  SoundCloudDl,
  FBDl,
  IGDl,
  MediafireDl,
  TTDl,
  XDl,
  YTMP3Dl,
  YTMP4Dl,
  SpotifyDl,
  SFWaifu,
  SFWlolicon,
  SFWcosplay,
  PinSearch,
  ANIwallpaper,
};

export default nessid;
export const domain = 'https://backend.neastooid.xyz';
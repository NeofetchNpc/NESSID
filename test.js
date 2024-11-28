import { sfwCosplayerV3 } from './index.js';

(async () => {
    const result = await sfwCosplayerV3();
    console.log(result);
})();

/* List Func V2
- sfwWaifuV2 ( Random Waifu )
- sfwXwaifuV2 ( Random Waifu +18 )
- sfwNekoV2 ( Random Neko )
- sfwXnekoV2 ( Randon Neko +18 )
- sfwMeguminV2 ( Random Megumin )
- sfwAwooV2 ( Random Awoo )
*/

import { baLogo } from './index.js'; // Sesuaikan dengan lokasi module Anda

(async () => {
    const logoText = "My Custom Logo";
    const response = await baLogo(logoText);
    console.log(response);
})();

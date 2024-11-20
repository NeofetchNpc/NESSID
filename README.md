[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)

# `information`
> This module was created only to make it easier to use an api function as a function in the code
> you can use it for free!!!
> If there are bugs or problems, you can just submit issues on GitHub! We also accept requests!!!

<details open align="center">
<summary><b>↓ Total Visitors ↓</b></summary>
<br>
<a href="https://www.instagram.com/fatih_frdaus"><img alt="Cute Count" src="https://count.getloli.com/get/@NeofetchNpc?theme=rule34"/></a>
</details>
</div>

---------
# `📍 Changelogs`
```js
// ( WIP ) Work In Progres
// Stabile Version
+ AIO ( ALL IN ONE ) Downloader
+ MediaFire Downloader
+ Soundcloud Downloader
+ BiliBili Downloader
+ Pivix Search
```

---------

# `📍 How to use ???`

`📌 Ai </>`

1. ChatGPT
```js
import { chatGPT } from 'neastooapi';

(async () => {
    const prompt = "Hello, how are you today?";
    const response = await chatGPT(prompt);
    console.log(response);
})();
```

2. BlackboxAI
```js
import { blackBoxChat } from 'neastooapi';

(async () => {
    const chat = "Hi";
    const response = await blackBoxChat(chat);

    console.log(response); 
})();
```

3. Gemini
```js
import { gemini } from 'neastooapi';

(async () => {
    const prompt = "Hello, how are you today?";
    const response = await gemini(prompt);
    console.log(response);
})();
```

---------

`📌 Downloader </>`

1. Tiktok Downloader
```js
import { TiktokDL } from 'neastooapi';

(async () => {
    const tiktokUrl = "https://www.tiktok.com/@example/video/123456789"; 
    const response = await TiktokDL(tiktokUrl);

    console.log(response); 
})();
```

2. Youtube MP3/MP4 Downloader
```js
// MP3
import { ytbmp3downloader } from 'neastooapi';

ytbmp3downloader('https://youtu.be/v37ECJeIjBw?si=xp0jsR6ejdT1hhKf')
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
// MP4
import { ytbmp4downloader } from 'neastooapi';

ytbmp4downloader('https://youtu.be/v37ECJeIjBw?si=xp0jsR6ejdT1hhKf')
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
```

3. Instagram Downloader
```js
import { InstagramDL } from 'neastooapi';

(async () => {
    const instagramUrl = "https://www.instagram.com/p/example"; 
    const response = await InstagramDL(instagramUrl);

    console.log(response); 
})();
```

4. Spotify Downloader
```js
import { SpotifyDL } from 'neastooapi';

(async () => {
    const spotifyUrl = "https://open.spotify.com/track/example"; 
    const response = await SpotifyDL(spotifyUrl);

    console.log(response); 
})();
```

5. Twitter/X Downloader
```js
import { twitterDownloader } from 'neastooapi';

(async () => {
    const twitterUrl = "https://twitter.com/username/status/example"; 
    const response = await twitterDownloader(twitterUrl);

    console.log(response); 
})();
```

6. Google Drive Downloader
```js
import { googleDriveDownloader } from 'neastooapi';

(async () => {
    const googleDriveUrl = "https://drive.google.com/file/d/example"; 
    const response = await googleDriveDownloader(googleDriveUrl);

    console.log(response); 
})();
```

7. Mediafire Downloader
```js
import { mediafireDl } from 'neastooapi';

(async () => {
  try {
    const url = 'https://www.mediafire.com/file/example';
    const data = await mediafireDl(url);
    console.log(data);
  } catch (error) {
    console.error('Error:', error.message);
  }
})();
```

8. Soundcloud Downloader
```js
import { soundCloudDl } from 'neastooapi';

const url = 'https://soundcloud.com/yusup909/example';

(async () => {
  try {
    const result = await soundCloudDl(url);
    console.log(result);
  } catch (error) {
    console.error('Error:', error.message);
  }
})();
```

9. AIO Downloader
```js
import { allInOneDownload } from 'neastooapi';

(async () => {
  try {
    const url = 'example';
    const result = await allInOneDownload(url);
    console.log(result);
  } catch (error) {
    console.error('Error:', error.message);
  }
})();
```

10. Bstasion/Bilibili Search
```js
import { bStasionDl } from 'neastooapi';

const url = 'https://bstation.example.com/video/xyz123';

(async () => {
  try {
    const result = await bStasionDl(url);
    console.log(result);
  } catch (error) {
    console.error('Error:', error.message);
  }
})();
```

---------

`📌 Anime Tools </>`
1. Random Waifu
```js
import { sfwAnime } from 'neastooapi';

(async () => {
    const result = await sfwAnime();
    console.log(result);
})();
```

2. Nhentai Search
```js
import { nhentaiSearch } from 'neastooapi';

(async () => {
    const query = "Blue Archive";
    const response = await nhentaiSearch(query);
    console.log(response);
})();
```

3. Char Anime Info
```js
import { charAnimeInfo } from 'neastooapi';

(async () => {
    const query = "Vermail";
    const response = await charAnimeInfo(query);
    console.log(response);
})();
```

4. Pixiv Search
```js
import { pixivSearch } from 'neastooapi';

(async () => {
  try {
    const query = 'anime';
    const results = await pixivSearch(query);
    console.log(results);
  } catch (error) {
    console.error('Error:', error.message);
  }
})();
```

`📌 Tools Features </>`
1. Search Google Image
```js
import { gimage } from 'neastooapi';

(async () => {
    try {
        const query = "anime";
        const response = await gimage(query);
        console.log(response);
    } catch (error) {
        console.error('Error:', error.message);
    }
})();
```

2. Pinterest Search
```js
import { PinterestSearch } from 'neastooapi';

(async () => {
    try {
        const query = "anime";
        const response = await PinterestSearch(query);
        console.log(response);
    } catch (error) {
        console.error('Error:', error.message);
    }
})();
```

3. Youtube Search
```js
import { YouTubeSearch } from 'neastooapi';

(async () => {
    try {
        const query = "YUSUP909"; 
        const response = await YouTubeSearch(query); 
        console.log(response); 
    } catch (error) {
        console.error('Error:', error.message); 
    }
})();
```

---------

🛑 Note !!!
> This Module is Still Under Development!!! Just Wait for the Update!!!

---------

## Thanks To ( Source of Ideas )
[![ShirokamiRyzen](https://github.com/ShirokamiRyzen.png?size=100)](https://github.com/ShirokamiRyzen)

## Staff Contribute
[![NeofetchNpc](https://github.com/NeofetchNpc.png?size=100)](https://github.com/NeofetchNpc)
[![NeastooID](https://github.com/NeeasTooID.png?size=100)](https://github.com/NeeasTooID)

---------

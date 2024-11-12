[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)

# `information`
> This module was created only to make it easier to use an api function as a function in the code
> you can use it for free!!!
> If there are bugs or problems, you can just submit issues on GitHub! We also accept requests!!!   

---------

# `📍 How to use ???`

`📌 Ai </>`

1. ChatGPT
```js
import { chatGPT } from 'neastooapi';

(async () => {
    const prompt = "Hello, how are you today?";
    const response = await chatGPT(prompt);
    console.log("AI Response:", response);
})();
```

2. BlackboxAI
```js
import { blackBoxChat } from 'neastooapi';

(async () => {
    const chat = "Hi";
    const response = await blackBoxChat(chat);

    console.log("Response from BlackBox:", response); // Menampilkan respons di log terminal
})();
```

`📌 Downloader </>`

1. Tiktok Downloader
```js
import { TiktokDL } from 'neastooapi';

(async () => {
    const tiktokUrl = "https://www.tiktok.com/@example/video/123456789"; // Ganti dengan URL TikTok asli
    const response = await TiktokDL(tiktokUrl);

    console.log("Response from TikTok Downloader:", response); // Menampilkan respons di log terminal
})();
```

2. Youtube MP3/MP4 Downloader
```js
import { ytbmp3downloader, ytbmp4downloader } from 'neastooapi';

(async () => {
    const youtubeUrl = "https://www.youtube.com/watch?v=example"; // Ganti dengan URL YouTube asli

    const mp3Response = await ytbmp3downloader(youtubeUrl);
    console.log("Response from YouTube MP3 Downloader:", mp3Response);

    const mp4Response = await ytbmp4downloader(youtubeUrl);
    console.log("Response from YouTube MP4 Downloader:", mp4Response);
})();
```

---------

🛑 Note !!!
> This Module is Still Under Development!!! Just Wait for the Update!!! 

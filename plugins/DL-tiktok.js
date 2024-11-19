import fetch from 'node-fetch';

export async function TiktokDL(url) {
    try {
        const apiUrl = `https://api.neastooid.xyz/api/downloader/tiktokdl?url=${encodeURIComponent(url)}`;
        const response = await fetch(apiUrl);
        const result = await response.json();

        if (result.code === 0 && result.msg === 'success') {
            const data = result.data;

            return {
                videoUrl: data.play || null,
                description: data.title || "No description available.",
                author: {
                    uniqueId: data.author?.unique_id || "Unknown",
                    nickname: data.author?.nickname || "Unknown",
                    avatar: data.author?.avatar || null
                },
                music: {
                    title: data.music_info?.title || "No title",
                    url: data.music_info?.play || null,
                    author: data.music_info?.author || "Unknown"
                },
                duration: data.duration || null,
                cover: data.cover || null
            };
        } else {
            throw new Error('Gagal mendapatkan video dari API');
        }
    } catch (error) {
        console.error('Error:', error.message);
        return {
            videoUrl: null,
            description: null,
            author: null,
            music: null,
            duration: null,
            cover: null,
            error: 'Error dalam mendapatkan data dari API TikTok downloader'
        };
    }
}

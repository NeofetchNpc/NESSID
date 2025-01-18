import axios from "axios";

class YouTubeScraper {
  constructor() {
    this.qualities = {
      video: {
        "144p": "1",
        "240p": "2",
        "360p": "3",
        "480p": "4",
        "720p": "5",
        "1080p": "6",
      },
    };
  }

  async fetchSaveTube(url, serverId, data = {}) {
    const headers = {
      accept: "*/*",
      authority: `cdn${serverId}.savetube.su`,
      referer: "https://ytshorts.savetube.me/",
      origin: "https://ytshorts.savetube.me/",
      "user-agent": "Postify/1.0.0",
      "Content-Type": "application/json",
    };

    try {
      const response = await axios.post(url, data, { headers });
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async downloadVideo(videoUrl, quality = "720p") {
    const serverId = Math.floor(Math.random() * 11) + 51;
    const serverUrl = `cdn${serverId}.savetube.su`;

    const qualityMap = this.qualities.video;

    try {
      const videoInfo = await this.fetchSaveTube(`https://${serverUrl}/info`, serverId, { url: videoUrl });

      if (!videoInfo || !videoInfo.data) {
        throw new Error("Gagal mendapatkan informasi video.");
      }

      const downloadData = await this.fetchSaveTube(`https://${serverUrl}/download`, serverId, {
        downloadType: "video",
        quality: qualityMap[quality] || qualityMap["720p"],
        key: videoInfo.data.key,
      });

      if (!downloadData || !downloadData.data) {
        throw new Error("Gagal mendapatkan tautan unduhan.");
      }

      return {
        success: true,
        title: videoInfo.data.title,
        duration: videoInfo.data.durationLabel,
        thumbnail: videoInfo.data.thumbnail,
        downloadUrl: downloadData.data.downloadUrl,
        quality,
        type: "video",
      };
    } catch (error) {
      throw new Error("Download gagal: " + error.message);
    }
  }
}

export async function ytmp4DL(url, quality = "720p") {
  if (!url) throw new Error("URL is required.");

  const scraper = new YouTubeScraper();

  try {
    const result = await scraper.downloadVideo(url, quality);

    if (!result.success) {
      throw new Error(result.message || "Gagal mendapatkan video.");
    }

    return result;
  } catch (error) {
    throw new Error(error.message);
  }
}

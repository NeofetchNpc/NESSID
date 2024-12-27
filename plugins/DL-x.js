import axios from 'axios';

export async function twitterDL(url) {
  if (!url) throw new Error('URL is required.');

  try {
    const { data } = await axios.get('https://api.ryzendesu.vip/api/downloader/twitter', {
      params: { url },
    });

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

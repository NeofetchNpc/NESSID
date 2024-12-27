import axios from 'axios';

export async function TiktokDL(url) {
  if (!url) throw new Error('URL is required.');

  try {
    const { data } = await axios.get('https://api.ryzendesu.vip/api/downloader/ttdl', {
      params: { url },
    });

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

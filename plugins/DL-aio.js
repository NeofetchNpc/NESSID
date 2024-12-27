import axios from 'axios';

export async function AioDL(url) {
  if (!url) throw new Error('URL is required.');

  try {
    const { data } = await axios.get(`https://api.ryzendesu.vip/api/downloader/aiodown?url=${encodeURIComponent(url)}`);
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch: ${error.response?.status || error.message}`);
  }
}

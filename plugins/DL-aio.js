import axios from 'axios';

export async function AioDL(url) {
  if (!url) throw new Error('URL is required.');

  const { data } = await axios.get(`https://api.ryzendesu.vip/api/downloader/aiodown`, {
    params: { url },
  });
  return data;
}

import axios from 'axios';

export async function bStationDL(url) {
  if (!url) throw new Error('URL is required.');

  const { data } = await axios.get(`https://api.ryzendesu.vip/api/downloader/bilibili`, {
    params: { url },
  });
  return data;
}

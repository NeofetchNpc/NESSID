import axios from 'axios';

export async function bStationDL(url) {
  if (!url) throw new Error('URL is required.');

  try {
    const { data } = await axios.get('https://api.ryzendesu.vip/api/downloader/bilibili', {
      params: { url },
    });
    
    return data?.data || {};
  } catch (error) {
    throw new Error(`Failed to fetch: ${error.response?.status || error.message}`);
  }
}

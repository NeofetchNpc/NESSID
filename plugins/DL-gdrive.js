import axios from 'axios';

export async function gdriveDL(url) {
  if (!url) {
    throw new Error('URL is required.');
  }

  try {
    const { data } = await axios.get('https://api.ryzendesu.vip/api/downloader/gdrive', {
      params: { url },
    });

    return data;
  } catch (error) {
    throw new Error(`Failed to fetch: ${error.message}`);
  }
}

import axios from 'axios';

export async function mediafireDL(url) {
  if (!url) {
    throw new Error('URL is required.');
  }

  try {
    const { data } = await axios.get('https://api.neastooid.xyz/api/downloader/mediafire', {
      params: { url },
    });

    return data;
  } catch (error) {
    throw new Error(`Failed to fetch: ${error.message}`);
  }
}

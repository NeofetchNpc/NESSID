import axios from 'axios';

export async function ytmp3DL(url, quality = 128) {
  if (!url) throw new Error('URL is required.');

  try {
    const { data } = await axios.get('https://api.neastooid.xyz/api/downloader/ytmp3', {
      params: { 
        url, 
        q: quality,
      },
    });

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

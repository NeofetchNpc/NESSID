import axios from 'axios';

export async function ytmp3DL(url, q = '128') {
  if (!url) throw new Error('URL is required.');
  if (!q) throw new Error('Quality is required.');

  try {
    const { data } = await axios.get('https://api.neastooid.xyz/api/downloader/ytmp3', {
      params: { url, q },
    });

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

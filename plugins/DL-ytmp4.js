import axios from 'axios';

export async function ytmp4DL(url) {
  if (!url) throw new Error('URL is required.');

  try {
    const { data } = await axios.get('https://api.neastooid.xyz/api/downloader/ytmp4', {
      params: { url },
    });

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

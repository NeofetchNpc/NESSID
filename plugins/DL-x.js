import axios from 'axios';

export async function xDl(url) {
  if (!url) throw new Error('URL is required.');

  try {
    const { data } = await axios.get('https://api.neastooid.xyz/api/downloader/x', {
      params: { url },
    });

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

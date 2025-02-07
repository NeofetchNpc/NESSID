import axios from 'axios';
import { domain } from '../index.js';

export async function SpotifyDl(url) {
  if (!url) {
    throw new Error('URL is required.');
  }

  try {
    const { data } = await axios.get(`${domain}/api/downloader/spotify`, {
      params: { url },
    });

    if (!data.success) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

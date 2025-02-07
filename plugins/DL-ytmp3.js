import axios from 'axios';
import { domain } from '../index.js';

export async function YTMP3Dl(url, quality = 128) {
  if (!url) throw new Error('URL is required.');

  try {
    const { data } = await axios.get(`${domain}/api/downloader/ytmp3`, {
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

import axios from 'axios';
import { domain } from '../index.js';

export async function youtubeAIO(url, type = 'audio') {
  if (!url) {
    throw new Error('URL is required.');
  }

  if (!['video', 'audio'].includes(type)) {
    throw new Error('Invalid type. Use "video" or "audio".');
  }

  try {
    const endpoint = `/api/youtube/${type}`;
    const { data } = await axios.get(`${domain}${endpoint}`, {
      params: { url },
    });

    return data;
  } catch (error) {
    throw new Error(`Failed to fetch: ${error.message}`);
  }
}

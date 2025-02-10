import axios from 'axios';
import { domain } from '../index.js';

export async function youtubeAIO(url) {
  if (!url) {
    throw new Error('URL is required.');
  }

  try {
    const { data } = await axios.get(`${domain}/api/youtube`, {
      params: { url },
    });

    return data;
  } catch (error) {
    throw new Error(`Failed to fetch: ${error.message}`);
  }
}

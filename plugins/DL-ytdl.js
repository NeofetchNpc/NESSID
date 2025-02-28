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
    const response = await axios.get(`${domain}${endpoint}`, {
      params: { url },
    });

    return response.data; // Langsung meneruskan JSON dari API
  } catch (error) {
    return error.response?.data || { error: `Failed to fetch: ${error.message}` };
  }
}

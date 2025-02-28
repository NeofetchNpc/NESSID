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
    const endpoint = `/api/youtube/${type}?url=${encodeURIComponent(url)}`;
    const response = await axios.get(`${domain}${endpoint}`);

    return response.data; // Meneruskan JSON asli dari API
  } catch (error) {
    return error.response?.data || { error: `Failed to fetch: ${error.message}` };
  }
}

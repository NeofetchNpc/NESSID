import axios from 'axios';
import { domain } from '../index.js';

export async function youtubeAIO(url, type = 'ytmp3') {
  if (!url) {
    throw new Error('URL is required.');
  }

  if (!['ytmp3', 'ytmp4'].includes(type)) {
    throw new Error('Invalid type. Use "ytmp4" or "ytmp3".');
  }

  try {
    const endpoint = `/api/downloader/ytdl/${type}?url=${encodeURIComponent(url)}`;
    const response = await axios.get(`${domain}${endpoint}`);

    return response.data; // Meneruskan JSON asli dari API
  } catch (error) {
    return error.response?.data || { error: `Failed to fetch: ${error.message}` };
  }
}

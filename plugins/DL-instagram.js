import axios from 'axios';
import { domain } from '../index.js';

export async function IGDl(url) {
  if (!url) {
    throw new Error('URL is required.');
  }

  try {
    const { data } = await axios.get(`${domain}/api/igdl`, {
      params: { url },
    });

    return data;
  } catch (error) {
    throw new Error(`Failed to fetch: ${error.message}`);
  }
}

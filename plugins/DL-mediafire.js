import axios from 'axios';
import { domain } from '../index.js';

export async function MediafireDl(url) {
  if (!url) {
    throw new Error('URL is required.');
  }

  try {
    const { data } = await axios.get(`${domain}/api/mediafire`, {
      params: { url },
    });

    return data;
  } catch (error) {
    throw new Error(`Failed to fetch: ${error.message}`);
  }
}

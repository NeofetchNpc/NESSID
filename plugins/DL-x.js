import axios from 'axios';
import { domain } from '../index.js';

export async function XDl(url) {
  if (!url) throw new Error('URL is required.');

  try {
    const { data } = await axios.get(`${domain}/api/twitter`, {
      params: { url },
    });

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

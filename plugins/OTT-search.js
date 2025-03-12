import axios from 'axios';
import { domain } from '../index.js';

export async function OTTsearch(q) {
  if (!q) throw new Error('Query is required.');

  try {
    const { data } = await axios.get(`${domain}/api/otaku/an-s`, {
      params: { q: q }, 
    });

    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
}

import axios from 'axios';
import { domain } from '../index.js';

export async function PinSearch(query = 'waifu') {
  try {
    const { data } = await axios.get(`${domain}/api/anime/pin`, {
      params: { q: query },
    });

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

import axios from 'axios';
import { domain } from '../index.js';

export async function ANIwallpaper(query = 'waifu') {
  try {
    const { data } = await axios.get(`${domain}/api/wallpaper`, {
      params: { q: query },
    });

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

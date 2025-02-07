import axios from 'axios';
import { domain } from '../index.js';

export async function SFWaifuv1(tag = 'waifu') {
  try {
    const { data } = await axios.get(`${domain}/api/anime/waifuv1`, {
      params: { included_tags: tag },
    });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

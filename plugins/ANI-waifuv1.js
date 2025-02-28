import axios from 'axios';
import { domain } from '../index.js';

export async function SFWaifu(tag = 'waifu') {
  try {
    const { data } = await axios.get(`${domain}/api/waifuv1`, {
      params: { included_tags: tag },
    });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

import axios from 'axios';
import { domain } from '../index.js';

export async function SFWaifuv2() {
  try {
    const { data } = await axios.get(`${domain}/api/anime/waifuv2`);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

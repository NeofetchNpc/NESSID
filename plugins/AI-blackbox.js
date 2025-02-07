import axios from 'axios';
import { domain } from '../index.js';

export async function BlackboxAi(query = 'Hi') {
  try {
    const { data } = await axios.get(`${domain}/api/ai/blackbox`, {
      params: { q: query },
    });

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

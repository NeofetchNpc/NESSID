import axios from 'axios';
import { domain } from '../index.js';

export async function GptAi(query = 'Hi') {
  try {
    const { data } = await axios.get(`${domain}/api/chatgpt`, {
      params: { q: query },
    });

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

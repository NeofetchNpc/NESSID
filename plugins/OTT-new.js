import axios from 'axios';
import { domain } from '../index.js';

export async function OTTnew() {
  try {
    const { data } = await axios.get(`${domain}/api/otaku/an-new`);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

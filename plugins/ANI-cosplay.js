import axios from 'axios';
import { domain } from '../index.js';

export async function SFWcosplay() {
  try {
    const { data } = await axios.get(`${domaincp}/api/cosplayer`);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}
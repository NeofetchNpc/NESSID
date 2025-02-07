import axios from 'axios';
import { domaincp } from '../index.js';

export async function SFWcosplay() {
  try {
    const { data } = await axios.get(`${domaincp}/api/anime/cosplayer`);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}
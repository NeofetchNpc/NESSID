import axios from 'axios';

export async function SFWcosplay() {
  try {
    const { data } = await axios.get('https://api.neastooid.xyz/api/anime/cosplayer');
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}
import axios from 'axios';

export async function SFWaifuv2() {
  try {
    const { data } = await axios.get('https://api.neastooid.xyz/api/anime/waifuv2');
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

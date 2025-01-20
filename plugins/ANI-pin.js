import axios from 'axios';

export async function PinSearch(query = 'waifu') {
  try {
    const { data } = await axios.get('https://api.neastooid.xyz/api/anime/pin', {
      params: { q: query },
    });

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

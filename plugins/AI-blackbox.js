import axios from 'axios';

export async function BlackboxAi(query = 'Hi') {
  try {
    const { data } = await axios.get('https://api.neastooid.xyz/api/ai/blackbox', {
      params: { q: query },
    });

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

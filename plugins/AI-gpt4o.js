import axios from 'axios';

export async function GptAi(query = 'Hi') {
  try {
    const { data } = await axios.get('https://api.neastooid.xyz/api/ai/chatgpt', {
      params: { q: query },
    });

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

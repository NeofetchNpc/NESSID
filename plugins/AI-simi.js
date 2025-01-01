import axios from 'axios';

export async function SimiAi(q) {
  if (!q) throw new Error('URL is required.');

  try {
    const { data } = await axios.get('https://api.neastooid.xyz/api/ai/simi', {
      params: { q },
    });

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

import axios from 'axios';

export async function chatGpt(url) {
  if (!url) {
    throw new Error('URL is required.');
  }

  try {
    const { data } = await axios.get('https://api.neastooid.xyz/api/ai/gpt', {
      params: { q },
    });

    if (!data.success) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

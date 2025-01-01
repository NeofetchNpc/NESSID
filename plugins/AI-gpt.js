import axios from 'axios';

export async function chatGpt(url) {
  if (!url) {
    throw new Error('URL is required.');
  }

  try {
    const { data } = await axios.get('https://api.neastooid.xyz/api/ai/gpt', {
      params: { q: url },
    });

    if (!data.success) {
      throw new Error(data.message || 'Something went wrong');
    }

    return data;
  } catch (error) {
    const errorMessage = error.response ? error.response.data.message : error.message || 'Unknown error';
    throw new Error(errorMessage);
  }
}

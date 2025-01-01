import axios from 'axios';

export async function chatGpt(q) {
  if (!q) {
    throw new Error('Query parameter q is required.');
  }

  try {
    const { data } = await axios.get(`https://api.neastooid.xyz/api/ai/gpt?q=${q}`);

    if (!data.success) {
      throw new Error(data.message || 'Something went wrong');
    }

    return data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : error.message || 'Unknown error');
  }
}

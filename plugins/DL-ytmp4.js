import axios from 'axios';

export async function YTMP4Dl(url, quality = 360) {
  if (!url) throw new Error('URL is required.');

  try {
    const { data } = await axios.get(`${domain}/api/ytmp4`, {
      params: { 
        url, 
        q: quality,
      },
    });

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

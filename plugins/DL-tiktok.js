import axios from 'axios';

export async function TTDl(url) {
  if (!url) throw new Error('URL is required.');

  try {
    const { data } = await axios.get('https://api.neastooid.xyz/api/downloader/tiktok', {
      params: { url }, 
    });

    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
}

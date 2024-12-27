import axios from 'axios';

export async function SpotifyDL(url) {
  if (!url) {
    throw new Error('URL is required.');
  }

  try {
    const { data } = await axios.get('https://ins.neastooid.xyz/api/downloader/spotifydl', {
      params: { url },
    });

    if (!data.success) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

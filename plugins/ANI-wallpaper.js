import axios from 'axios';

export async function ANIwallpaper(query = 'waifu') {
  try {
    const { data } = await axios.get('https://api.neastooid.xyz/api/anime/wallpaper', {
      params: { q: query },
    });

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

import axios from 'axios';

export async function SFWaifuv1(tag = 'waifu') {
  try {
    const { data } = await axios.get('https://api.neastooid.xyz/api/anime/waifuv1', {
      params: { included_tags: tag },
    });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

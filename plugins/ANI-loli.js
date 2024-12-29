import axios from 'axios';

export async function SFWlolicon() {
  try {
    const { data } = await axios.get('https://api.neastooid.xyz/api/anime/loli');
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}
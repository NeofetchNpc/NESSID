import axios from 'axios';

export async function A1NSFx(prompt) {
  if (!prompt) throw new Error('Prompt is required.');

  try {
    const { data } = await axios.post('https://ins.neastooid.xyz/api/ai/AINSfx', {
      prompt: prompt,
    }, {
      headers: {
        'Content-Type': 'application/json',
      }
    });

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

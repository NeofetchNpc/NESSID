import axios from 'axios';

export async function AiInsfxV2(imageUrl, model = 'anime') {
  if (!['anime', 'pixar'].includes(model)) {
    throw new Error('Model harus "anime" atau "pixar"');
  }

  try {
    const { data } = await axios.post('https://ins.neastooid.xyz/api/ai/ainsfxv2', 
      { imageUrl, model }, 
      {
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36',
          'Referer': 'https://ins.neastooid.xyz/'
        }
      }
    );

    return data.uploadedUrl || null;
  } catch (error) {
    throw new Error(error.message);
  }
}

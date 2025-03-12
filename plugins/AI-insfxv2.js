import axios from 'axios';

export async function AiInsfxV2(imageUrl, model = 'instex2img', apikey = 'yusup') {
  try {
    const { data } = await axios.get(`https://apii.ins.biz.id/api/ai/ainsfxv2`, {
      params: {
        q: imageUrl,
        model: model,
        apikey: apikey
      },
      headers: {
        'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36',
        'Referer': 'https://apii.ins.biz.id/api/ai/ainsfxv2'
      }
    });

    return data.uploadedUrl || null;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
}

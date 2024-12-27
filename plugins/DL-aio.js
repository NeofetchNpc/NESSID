import fetch from 'node-fetch';

export async function AioDL(url) {
  if (!url) throw new Error('URL is required.');

  const endpoint = `https://api.ryzendesu.vip/api/downloader/aiodown?url=${encodeURIComponent(url)}`;
  const response = await fetch(endpoint);

  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.status}`);
  }

  return response.json();
}

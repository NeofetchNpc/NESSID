import fetch from 'node-fetch';

export async function AioDL(url) {
  if (!url) throw new Error('URL is required.');

  const response = await fetch(`https://api.ryzendesu.vip/api/downloader/aiodown?url=${encodeURIComponent(url)}`);
  if (!response.ok) throw new Error(`Failed to fetch: ${response.status}`);

  return response.json();
}

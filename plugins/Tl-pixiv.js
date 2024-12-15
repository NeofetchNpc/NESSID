import fetch from 'node-fetch';

export async function pixivTl(query) {
  if (!query) throw new Error('Query is required.');

  const endpoint = `https://api.neastooid.xyz/api/tools/pixiv?query=${encodeURIComponent(query)}`;
  const response = await fetch(endpoint);

  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.status}`);
  }

  return response.json();
}

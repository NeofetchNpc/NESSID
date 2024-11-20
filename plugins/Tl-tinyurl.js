import fetch from 'node-fetch';

export async function tinyUrl(url) {
  if (!url) throw new Error('URL is required.');

  const endpoint = `https://api.neastooid.xyz/api/tools/tinyurl?url=${encodeURIComponent(url)}`;
  const response = await fetch(endpoint);

  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.status}`);
  }

  return response.json();
}

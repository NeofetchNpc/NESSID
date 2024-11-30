import fetch from 'node-fetch';

export async function jadwalSholat(query) {
  if (!query) throw new Error('Query is required.');

  const endpoint = `https://api.neastooid.xyz/api/tools/jadwal-sholat?kota=${encodeURIComponent(query)}`;
  const response = await fetch(endpoint);

  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.status}`);
  }

  return response.json();
}

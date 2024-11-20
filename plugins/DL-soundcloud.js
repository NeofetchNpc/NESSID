import fetch from 'node-fetch';

async function soundcloudDl(url) {
  if (!url) {
    throw new Error('URL SoundCloud harus disediakan.');
  }

  const apiUrl = `https://api.neastooid.xyz/api/downloader/soundcloud?url=${encodeURIComponent(url)}`;

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Gagal mengambil data dari API: ${errorText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Terjadi kesalahan: ${error.message}`);
  }
}

export default soundcloudDl;

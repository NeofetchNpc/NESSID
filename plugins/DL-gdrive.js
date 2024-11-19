import fetch from 'node-fetch';

export async function googleDriveDownloader(url) {
    try {
        const apiUrl = `https://api.neastooid.xyz/api/downloader/gdrive?url=${encodeURIComponent(url)}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.downloadUrl) {
            return {
                downloadLink: data.downloadUrl,  // Ganti 'downloadLink' dengan 'downloadUrl' dari respons
                fileName: data.fileName || "Unknown file name", // Gunakan 'fileName' dari respons atau placeholder
                fileSize: data.fileSize || "Unknown file size", // Gunakan 'fileSize' dari respons atau placeholder
            };
        } else {
            throw new Error('Gagal mendapatkan link unduhan dari API Google Drive downloader');
        }
    } catch (error) {
        console.error('Error:', error.message);
        return {
            downloadLink: null,
            fileName: null,
            fileSize: null,
            error: 'Error dalam mendapatkan data dari API Google Drive downloader'
        };
    }
}

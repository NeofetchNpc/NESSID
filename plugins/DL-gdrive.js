import fetch from 'node-fetch';

export async function googleDriveDownloader(url) {
    try {
        const apiUrl = `https://api.neastooid.xyz/api/downloader/gdrive?url=${encodeURIComponent(url)}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.success) {
            return {
                downloadLink: data.downloadLink,
                fileName: data.fileName || "Unknown file name",
                fileSize: data.fileSize || "Unknown file size",
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

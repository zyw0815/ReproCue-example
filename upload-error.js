function showUploadError(status, retryButton) {
  status.textContent = 'Upload failed. Try again.';
  retryButton.hidden = false;
}

function showUploadError(status, retryButton) {
  status.dataset.state = 'error';
  status.textContent = 'Upload failed. Try again.';
  retryButton.hidden = false;
}

const form = document.querySelector('form');
const uploadButton = document.querySelector('#upload');
const retryButton = document.querySelector('#retry');
const status = document.querySelector('[role="status"]');

let attempts = 0;

async function sendImage() {
  attempts += 1;
  if (attempts === 1) {
    throw new Error('The demo upload service rejected the first request.');
  }
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  uploadButton.disabled = true;
  retryButton.hidden = true;
  delete status.dataset.state;
  status.textContent = 'Uploading…';

  try {
    await sendImage();
    status.textContent = 'Upload complete.';
  } catch {
    showUploadError(status, retryButton);
  }
});

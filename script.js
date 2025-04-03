const qrImage = document.getElementById('qrImage');
const urlInput = document.getElementById('urlInput');
const generateBtn = document.getElementById('generateBtn');

generateBtn.addEventListener('click', () => {
    const url = urlInput.value;
    if (url) {
        fetch(`/generate-qrcode?url=${url}`)
            .then(response => response.text())
            .then(data => {
                qrImage.src = data;
            })
            .catch(error => {
                console.error(error);
                alert('Failed to generate QR code');
            });
    } else {
        alert('Please enter a URL');
    }
});
const QRCode = require('qrcode');

async function generateQRCode(url) {
  try {
    const qrCodeDataURL = await QRCode.toDataURL(url, { errorCorrectionLevel: 'H' });
  } catch (err) {
    console.error("Could not generate QR code", err);
  }
}

const url = process.argv[2];
if (!url) {
  console.error("Please provide a URL as a command line argument.");
  process.exit(1);
}

generateQRCode(url);
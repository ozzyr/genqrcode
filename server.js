const express = require('express');
const QRCode = require('qrcode');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname)));

app.get('/generate-qrcode', async (req, res) => {
    const url = req.query.url;
    if (!url) {
        return res.status(400).send('URL parameter is required.');
    }

    try {
        const qrCodeDataURL = await QRCode.toDataURL(url, { errorCorrectionLevel: 'H' });
        res.send(qrCodeDataURL);
    } catch (error) {
        console.error("QR code generation error:", error);
        res.status(500).send('Failed to generate QR code.');
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
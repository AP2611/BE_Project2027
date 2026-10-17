const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
app.use(cors());
const upload = multer({ storage: multer.memoryStorage() });

app.post('/api/detect', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No image uploaded' });
    }

    const base64 = req.file.buffer.toString('base64');
    const apiKey = process.env.ROBOFLOW_API_KEY;
    const modelUrl = process.env.ROBOFLOW_MODEL_URL; // e.g., arjun-panse/model-name
    const version = process.env.ROBOFLOW_VERSION;

    // Construct URL - try different formats based on what user provided
    let url;
    if (modelUrl && version) {
      url = `https://detect.roboflow.com/${modelUrl}/${version}?api_key=${apiKey}`;
    } else if (modelUrl) {
      url = `https://detect.roboflow.com/${modelUrl}?api_key=${apiKey}`;
    } else {
      url = `https://detect.roboflow.com/${process.env.ROBOFLOW_PROJECT}/${process.env.ROBOFLOW_VERSION}?api_key=${apiKey}`;
    }

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ image: base64 })
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Detection failed' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

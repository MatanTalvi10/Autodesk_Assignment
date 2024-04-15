const express = require('express');
const axios = require('axios');
const os = require('os');
const process = require('process');

const app = express();
const port = 3000;  // default to 3000

const YOUTUBE_API_KEY = 'AIzaSyBaL25MFJikE8NYtAHhNcIr4V7PXIs36KE';  // My API Key

app.get('/health', (req, res) => {
  const freeMemory = os.freemem() / os.totalmem() * 100;
  const cpuLoad = os.cpus().reduce((acc, cpu) => acc + cpu.times.user, 0) / (os.cpus().length * os.uptime()) * 100;

  res.json({
    os: os.platform(),
    nodeVersion: process.version,
    memoryUsage: `${freeMemory.toFixed(2)}%`,
    cpuUsage: `${cpuLoad.toFixed(2)}%`,
  });
});

app.get('/youtube', async (req, res) => {
  try {
    const response = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
      params: {
        part: 'snippet',
        maxResults: 10,
        q: 'Autodesk',
        type: 'video',
        key: YOUTUBE_API_KEY,
      },
    });

    const videos = response.data.items.map((item) => ({
      title: item.snippet.title,
      length: null, // This API doesn't provide video length
      views: item.snippet.viewCount,
    }));

    res.json(videos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching videos' });
  }
});

app.listen(port, () => console.log(`Server listening on port ${port}`));

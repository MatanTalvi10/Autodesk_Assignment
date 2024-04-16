const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;  // port from env or default to 3000

app.listen(port, () => console.log(`Server listening on port ${port}`));

const YOUTUBE_API_KEY = 'AIzaSyBaL25MFJikE8NYtAHhNcIr4V7PXIs36KE';  // My API Key

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
      length: item.snippet.length, 
      views: item.snippet.viewCount,
    }));

    res.json(videos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching videos' });
  }
});

app.get('/health', (req, res) => {
  const osName = process.platform;
  const nodeVersion = process.version;
  const memoryUsage = process.memoryUsage();
  const cpuUsage = process.cpuUsage();

  res.json({
    osName,
    nodeVersion,
    memoryUsage,
    cpuUsage,
  });
});

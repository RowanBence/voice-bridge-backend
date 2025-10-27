require('dotenv').config(); // 🔮 Load environment variables

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const TTS_API_KEY = process.env.TTSMP3_API_KEY;

app.get('/', (req, res) => {
  res.send(`Voice Bridge Backend is running! Your API key is: ${TTS_API_KEY ? '✅ Loaded' : '❌ Missing'}`);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

# Council Chat Bridge - Setup Guide

## 🔧 What Was Fixed

### Original Issues:
1. **Browser speechSynthesis**: The old code used the browser's built-in TTS, which cannot be routed to Zoom
2. **No ttsMP3 Integration**: Wasn't actually using the ttsMP3.com API
3. **Missing Error Handling**: No proper error messages when API calls failed
4. **No Audio Player**: No way to control or route the audio output

### Fixes Applied:
✅ **Proper ttsMP3.com API Integration**: Now correctly calls the ttsMP3 API
✅ **Two API Key Fields**: Separate fields for OpenAI and ttsMP3.com
✅ **Audio Player**: Added HTML5 audio player that can be routed to virtual audio devices
✅ **Better Error Messages**: Clear error messages for common issues (quota, API keys, etc.)
✅ **Character-Specific Voices**: Each character now has an appropriate voice from ttsMP3
✅ **Improved UI**: Better status messages and disabled button during processing

## 🎯 How to Get API Keys

### OpenAI API Key:
1. Go to https://platform.openai.com/api-keys
2. Create a new secret key
3. Copy the key (starts with `sk-`)

### ttsMP3.com API Key:
1. Purchase a 1-year plan at https://ttsmp3.com/register
2. Email support@ttsmp3.com requesting API access
3. They will send you an API key

## 🔌 Using as a Bridge to Zoom

### Method 1: Virtual Audio Cable (Recommended)
1. **Install Virtual Audio Software**:
   - Windows: VB-Audio Virtual Cable or VoiceMeeter
   - Mac: BlackHole or Loopback
   - Linux: PulseAudio virtual sink

2. **Configure Your System**:
   - Set the virtual audio device as your system's default output
   - Open the HTML file in your browser
   - Configure your browser to output audio to the virtual device

3. **Set Up Zoom**:
   - In Zoom settings → Audio
   - Set Microphone to your virtual audio device
   - Test the audio input

4. **Use the App**:
   - Type your message
   - Click "Talk"
   - The character's voice will play through the audio player
   - Zoom will capture this audio as if it's your microphone

### Method 2: Direct Screen Share with Audio
1. Open the HTML file in a browser
2. In Zoom, use "Share Screen"
3. Select "Share computer sound"
4. Share the browser window
5. Participants will hear the audio directly

## 🎭 Character Voice Mapping

- **Viki** → Amy (British Female) - Warm Northern energy
- **Kira** → Joanna (American Female) - Sassy and confident
- **Chuck** → Brian (British Male) - Calm and protective
- **Fin** → Matthew (American Male) - Gentle and cosmic
- **Charlie** → Russell (Australian Male) - Grounded and insightful

## 💡 Usage Tips

1. **Keep Messages Concise**: Shorter messages work better for real-time conversation
2. **Monitor Quota**: ttsMP3 has character limits based on your plan
3. **Test Audio Routing**: Test your virtual audio setup before important meetings
4. **Save API Keys**: Your browser can save the API keys for future sessions

## ⚠️ Troubleshooting

### "OpenAI Error 401"
- Check that your OpenAI API key is correct
- Ensure you have credits in your OpenAI account

### "ttsMP3: Quota exceeded"
- You've reached your character limit
- Upgrade your ttsMP3 plan or wait for reset

### "No audio URL returned"
- Check your ttsMP3 API key is correct
- Ensure your account is active

### "Audio playback failed"
- Check browser audio permissions
- Try a different browser (Chrome/Edge work best)
- Ensure your audio device isn't muted

### Zoom Can't Hear the Audio
- Verify virtual audio device is properly installed
- Check Zoom microphone settings
- Test with Zoom's "Test Speaker & Microphone"
- Ensure the HTML file's audio player is unmuted

## 🚀 Advanced Usage

### Custom Voice Selection
You can modify the `characterMap` in the code to use different ttsMP3 voices:
- Joanna, Matthew (American English)
- Amy, Brian, Emma (British English)
- Russell (Australian English)
- Many more languages available!

### Batch Conversations
You can queue multiple messages by building a script that automatically fills in the input and clicks "Talk"

## 📝 Notes

- The conversation memory is maintained in the session
- Refresh the page to clear the conversation history
- Audio files are cached by ttsMP3 for efficiency
- The app works best in Chrome or Edge browsers

## 🆘 Support

- ttsMP3 issues: support@ttsmp3.com
- OpenAI issues: https://help.openai.com/
- Virtual audio software: Check their respective documentation

---

**Pro Tip**: For the best Zoom experience, use a quality USB microphone in addition to the virtual audio routing. This allows you to speak naturally while the Council characters respond through the virtual channel!

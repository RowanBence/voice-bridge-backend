# 🎭 GPT Character Voice Bridge for Zoom

## Seamlessly bring your book characters to life in Zoom meetings!

This Chrome extension automatically converts your custom GPT's character dialogue into natural speech using ttsMP3.com voices, allowing novelists to have real voice conversations with their book characters in Zoom.

---

## ✨ Features

- 🎯 **Automatic Voice Generation** - Characters speak automatically when they respond in ChatGPT
- 🎭 **Character-Specific Voices** - Each character uses their own unique voice
- 🔊 **Zoom Integration** - Audio routes directly to Zoom meetings via virtual audio
- ⚡ **Zero Manual Steps** - No copying/pasting needed - just talk!
- 🔐 **Secure** - API keys stored locally in browser
- 🎨 **Customizable** - Map any character to any ttsMP3 voice

---

## 📋 Requirements

1. **Google Chrome** or **Microsoft Edge** browser
2. **ttsMP3.com API key** ([Get one here](https://ttsmp3.com/register))
3. **Virtual Audio Device**:
   - Windows: [VB-Audio Virtual Cable](https://vb-audio.com/Cable/)
   - Mac: [BlackHole](https://existential.audio/blackhole/)
   - Linux: PulseAudio virtual sink
4. **Zoom** desktop app

---

## 🚀 Installation

### Step 1: Install the Extension

1. Download/clone this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" (toggle in top right)
4. Click "Load unpacked"
5. Select the `gpt-voice-bridge-extension` folder
6. The extension icon 🎭 should appear in your toolbar

### Step 2: Get Your ttsMP3 API Key

1. Go to [ttsMP3.com/register](https://ttsmp3.com/register)
2. Purchase a 1-year plan (includes API access)
3. Email **support@ttsmp3.com** requesting your API key
4. Copy the API key when you receive it

### Step 3: Install Virtual Audio Device

**Windows:**
- Download [VB-Audio Virtual Cable](https://vb-audio.com/Cable/)
- Install and restart your computer

**Mac:**
- Download [BlackHole](https://existential.audio/blackhole/)
- Install and grant audio permissions

**Linux:**
```bash
pactl load-module module-null-sink sink_name=virtual_audio sink_properties=device.description="Virtual_Audio"
```

### Step 4: Configure the Extension

1. Click the extension icon 🎭 in your toolbar
2. Paste your ttsMP3 API key
3. Ensure "Auto-Voice Enabled" is ON
4. Click "Save Settings"
5. Click "Test Voice" to verify it works

### Step 5: Configure Zoom

1. Open Zoom Settings → Audio
2. Set **Microphone** to:
   - Windows: "CABLE Output (VB-Audio Virtual Cable)"
   - Mac: "BlackHole 2ch"
   - Linux: "virtual_audio"
3. Test with "Test Microphone" button

**Important:** Also set your **system's default audio output** to the virtual device so browser audio goes to Zoom!

---

## 📖 Usage

### Format Your GPT's Responses

In your custom GPT's instructions, add this guidance:

```
When speaking as a character, format your response like this:

[CHARACTER: Viki] Well hello there, love! Ready to talk about your story?

[CHARACTER: Kira] I've got some insights for you!

Use this format for ALL character dialogue so the voice bridge can detect it.
```

### Talk to Your Characters

1. **Start a Zoom meeting** (or join one)
2. **Open ChatGPT** with your custom GPT
3. **Have a conversation** - Ask your characters questions
4. **They automatically respond with voice!**
5. **Zoom participants hear them speaking**

### Supported Dialogue Formats

The extension automatically detects these patterns:

```
[CHARACTER: Name] dialogue text here
**Name:** dialogue text here
[Name]: dialogue text here
Name: dialogue text here (at start of line)
```

---

## 🎭 Default Character Voices

| Character | Voice | Accent |
|-----------|-------|--------|
| Viki | Amy | British Female |
| Kira | Joanna | American Female |
| Chuck | Brian | British Male |
| Fin | Matthew | American Male |
| Charlie | Russell | Australian Male |

### Custom Character Voices

Want different voices? Edit `content.js` and modify the `defaultVoices` object:

```javascript
const defaultVoices = {
  'YourCharacter': 'Ivy',      // American female
  'AnotherChar': 'Joey',        // American male
  'ThirdChar': 'Mizuki',        // Japanese female
  'FourthChar': 'Giorgio'       // Italian male
};
```

**Available voices:** Joanna, Matthew, Ivy, Joey, Justin, Kendra, Amy, Brian, Emma, Geraint, Russell, Nicole, Olivia, Aria, Ayanda, and [many more](https://ttsmp3.com)!

---

## 🛠️ Troubleshooting

### No Audio in Zoom

- ✓ Verify Zoom microphone is set to virtual audio device
- ✓ Check system default audio output is also the virtual device
- ✓ Test Zoom's "Test Microphone" - should show audio levels
- ✓ Ensure browser audio isn't muted
- ✓ Restart Zoom after changing audio settings

### Extension Not Detecting Characters

- ✓ Refresh the ChatGPT page
- ✓ Check dialogue format matches: `[CHARACTER: Name] text`
- ✓ Verify "Auto-Voice Enabled" is ON in extension popup
- ✓ Open browser console (F12) and check for errors
- ✓ Make sure you're on chatgpt.com or chat.openai.com

### "Quota Exceeded" Error

- ✓ You've reached your ttsMP3 character limit
- ✓ Upgrade your ttsMP3 plan
- ✓ Wait for monthly quota reset
- ✓ Contact support@ttsmp3.com

### Audio is Delayed or Choppy

- ✓ Close other audio-intensive applications
- ✓ Check your internet connection
- ✓ Reduce Zoom video quality settings
- ✓ Try using a different ttsMP3 voice (some render faster)

---

## 📁 File Structure

```
gpt-voice-bridge-extension/
├── manifest.json          # Extension configuration
├── content.js            # Monitors ChatGPT & generates voices
├── background.js         # Background service worker
├── popup.html            # Settings interface
├── popup.js              # Settings logic
├── setup-guide.html      # User documentation
├── icons/                # Extension icons
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
└── README.md            # This file
```

---

## 🔐 Privacy & Security

- ✅ API keys stored **locally** in your browser only
- ✅ No data sent to any servers except ttsMP3.com
- ✅ Only active on ChatGPT pages
- ✅ Can be disabled/enabled anytime
- ✅ No tracking or analytics

---

## 🤝 Contributing

Want to improve this? Here are some ideas:

- Add more voice mapping presets
- Support for other TTS services (ElevenLabs, AWS Polly, etc.)
- Direct Zoom SDK integration (bot participant)
- Voice modulation controls
- Conversation recording feature

---

## 📝 License

MIT License - Feel free to modify and distribute!

---

## 🆘 Support

**Technical Issues:**
- Check browser console (F12) for errors
- Verify all setup steps completed
- Try on a fresh ChatGPT conversation

**API Issues:**
- Contact ttsMP3: support@ttsmp3.com
- Check your account quota and plan

**Feature Requests:**
- Open an issue with your idea!

---

## 🎉 You're All Set!

Head to ChatGPT, start a Zoom meeting, and have an actual voice conversation with your book characters!

**Pro Tip:** Use this for:
- Character development interviews
- Plot discussions with your cast
- Voice acting auditions
- Creative writing workshops
- Beta reader experiences
- Book promotion events

---

Made with ❤️ for novelists who want to hear their characters speak

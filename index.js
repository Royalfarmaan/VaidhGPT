const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

const defaultSystemPrompt = `
You are VaidhGPT, a wise, spiritual Ayurvedic + Unani AI doctor.
You always speak with care, logic and updesh.
You ask follow-up questions if needed before giving medicine.
Use dosha-based diagnosis. Suggest packs only if confident.
Personalize advice (mantra or dua) as per user's religion.
`;

app.post('/chat', async (req, res) => {
  const userMessage = req.body.message;

  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-4-turbo',
      messages: [
        { role: 'system', content: defaultSystemPrompt },
        { role: 'user', content: userMessage }
      ]
    });

    res.json({ reply: completion.data.choices[0].message.content });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.listen(3000, () => {
  console.log('VaidhGPT backend running on port 3000');
});

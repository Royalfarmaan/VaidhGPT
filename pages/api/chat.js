import { Configuration, OpenAIApi } from 'openai';

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

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const userMessage = req.body.message;

  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-4-turbo',
      messages: [
        { role: 'system', content: defaultSystemPrompt },
        { role: 'user', content: userMessage }
      ]
    });

    res.status(200).json({ reply: completion.data.choices[0].message.content });
  } catch (error) {
    console.error('OpenAI Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

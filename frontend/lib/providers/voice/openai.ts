import OpenAI from "openai";

const openai =
  new OpenAI({
    apiKey:
      process.env.OPENAI_API_KEY,
  });

interface GenerateOpenAIVoiceOptions {
  text: string;
}

export async function generateOpenAIVoice(
  options: GenerateOpenAIVoiceOptions
) {
  const { text } = options;

  const response =
    await openai.audio.speech.create({
      model: "gpt-4o-mini-tts",

      voice: "alloy",

      input: text,
    });

  const buffer =
    Buffer.from(
      await response.arrayBuffer()
    );

  const base64 =
    buffer.toString(
      "base64"
    );

  return `data:audio/mp3;base64,${base64}`;
}
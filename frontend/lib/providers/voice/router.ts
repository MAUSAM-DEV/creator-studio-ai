export async function getVoiceProvider(
  provider: string
) {
  switch (provider) {

    case "openai":
      return await import(
        "./openai"
      );

    case "elevenlabs":
      return await import(
        "./elevenlabs"
      );

    case "cartesia":
      return await import(
        "./cartesia"
      );

    default:
      throw new Error(
        "Unknown voice provider"
      );
  }
}

export async function getVoiceGenerator(
  provider: string
) {
  const module =
    await getVoiceProvider(
      provider
    );

  switch (provider) {

    case "openai":
      return (
        module as any
      ).generateOpenAIVoice;

    case "elevenlabs":
      return (
        module as any
      ).generateElevenLabsVoice;

    case "cartesia":
      return (
        module as any
      ).generateCartesiaVoice;

    default:
      throw new Error(
        `Provider ${provider} not implemented`
      );
  }
}
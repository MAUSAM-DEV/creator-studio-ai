export async function getMusicProvider(
  provider: string
) {
  switch (provider) {

    case "openai":
      return await import(
        "./openai"
      );

    case "suno":
      return await import(
        "./suno"
      );

    case "udio":
      return await import(
        "./udio"
      );

    default:
      throw new Error(
        "Unknown music provider"
      );
  }
}

export async function getMusicGenerator(
  provider: string
) {
  const module =
    await getMusicProvider(
      provider
    );

  switch (provider) {

    case "openai":
      return (
        module as any
      ).generateOpenAIMusic;

    case "suno":
      return (
        module as any
      ).generateSunoMusic;

    case "udio":
      return (
        module as any
      ).generateUdioMusic;

    default:
      throw new Error(
        `Provider ${provider} not implemented`
      );
  }
}
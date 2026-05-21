export async function getImageProvider(
  provider: string
) {
  switch (provider) {

    case "openai":
      return await import(
        "./openai"
      );

    case "flux":
      return await import(
        "./flux"
      );

    case "ideogram":
      return await import(
        "./ideogram"
      );

    case "recraft":
      return await import(
        "./recraft"
      );

    default:
      throw new Error(
        "Unknown image provider"
      );
  }
}

export async function getImageGenerator(
  provider: string
) {
  const module =
    await getImageProvider(
      provider
    );

  switch (provider) {

    case "openai":
      return (
        module as any
      ).generateOpenAIImages;

    default:
      throw new Error(
        `Provider ${provider} not implemented`
      );
  }
}
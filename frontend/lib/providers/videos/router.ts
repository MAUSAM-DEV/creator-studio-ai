export async function getVideoProvider(
  provider: string
) {
  switch (provider) {
    case "kling":
      return await import("./kling");

    case "seedance":
      return await import("./seedance");

    case "veo":
      return await import("./veo");

    case "higgsfield":
      return await import("./higgsfield");

    case "runway":
      return await import("./runway");

    case "luma":
      return await import("./luma");

    case "pixverse":
      return await import("./pixverse");

    case "hailuo":
      return await import("./hailuo");

    default:
      throw new Error(
        "Unknown video provider"
      );
  }
}

export async function getVideoGenerator(
  provider: string
) {
  const module =
    await getVideoProvider(provider);

  switch (provider) {
    case "kling":
      return (module as any).generateKlingVideo;
    default:
      throw new Error(
        `Provider ${provider} not implemented`
      );
  }
}
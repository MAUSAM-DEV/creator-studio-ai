export interface LibraryAsset {
  id: string;

  type:
    | "image"
    | "video"
    | "music"
    | "voice"
    | "export";

  name: string;

  url?: string;

  createdAt: string;
}

const STORAGE_KEY =
  "creator-studio-library";

const MAX_ASSETS = 100;

function loadLibrary(): LibraryAsset[] {

  if (
    typeof window ===
    "undefined"
  ) {
    return [];
  }

  try {

    const stored =
      localStorage.getItem(
        STORAGE_KEY
      );

    if (!stored) {
      return [];
    }

    return JSON.parse(
      stored
    );

  } catch (error) {

    console.error(
      "LOAD LIBRARY ERROR"
    );

    console.error(error);

    return [];

  }
}

function saveLibrary(
  assets: LibraryAsset[]
) {

  if (
    typeof window ===
    "undefined"
  ) {
    return;
  }

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(assets)
  );
}

export function addAsset(
  asset: LibraryAsset
) {

  const assets =
    loadLibrary();

  assets.unshift(asset);

  const trimmed =
    assets.slice(
      0,
      MAX_ASSETS
    );

  saveLibrary(trimmed);

  return asset;
}

export function getAssets() {
  return loadLibrary();
}

export function getAssetsByType(
  type: LibraryAsset["type"]
) {

  return loadLibrary().filter(
    (asset) =>
      asset.type === type
  );
}

export function clearLibrary() {

  saveLibrary([]);

}
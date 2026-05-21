export interface HistoryItem {
  id: string;

  type:
    | "image"
    | "video"
    | "voice"
    | "music"
    | "workflow"
    | "export";

  title: string;

  createdAt: string;

  metadata?: Record<
    string,
    any
  >;
}

const STORAGE_KEY =
  "creator-studio-history";

function loadHistory(): HistoryItem[] {

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
      "LOAD HISTORY ERROR"
    );

    console.error(error);

    return [];

  }
}

function saveHistory(
  history: HistoryItem[]
) {

  if (
    typeof window ===
    "undefined"
  ) {
    return;
  }

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(history)
  );
}

export function addHistoryItem(
  item: HistoryItem
) {

  console.log(
    "HISTORY ITEM ADDED",
    item
  );

  const history =
    loadHistory();

  history.unshift(item);

  saveHistory(history);

  return item;
}

export function getHistory() {

  const history =
    loadHistory();

  console.log(
    "GET HISTORY",
    history
  );

  return history;
}

export function getHistoryByType(
  type: HistoryItem["type"]
) {

  return loadHistory().filter(
    (item) =>
      item.type === type
  );
}

export function clearHistory() {

  saveHistory([]);

}
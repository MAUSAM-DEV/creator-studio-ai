import { getJobs } from "@/lib/core/queueManager";
import { getHistory } from "@/lib/core/historyManager";
import { getAssets } from "@/lib/core/libraryManager";
import { getProjects } from "@/lib/core/projectManager";

export interface AppState {
  queue: any[];
  history: any[];
  library: any[];
  projects: any[];
}

class AppStore {
  private state: AppState = {
    queue: [],
    history: [],
    library: [],
    projects: [],
  };

  private listeners:
    Array<() => void> = [];

  getState() {
    return this.state;
  }

  refresh() {
    this.state = {
      queue: [...getJobs()],
      history: [...getHistory()],
      library: [...getAssets()],
      projects: [...getProjects()],
    };

    this.notify();
  }

  subscribe(
    listener: () => void
  ) {
    this.listeners.push(
      listener
    );

    return () => {
      this.listeners =
        this.listeners.filter(
          (l) => l !== listener
        );
    };
  }

  private notify() {
    this.listeners.forEach(
      (listener) =>
        listener()
    );
  }
}

export const appStore =
  new AppStore();

appStore.refresh();
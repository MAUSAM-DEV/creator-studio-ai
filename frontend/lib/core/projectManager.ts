export interface ProjectAsset {
  id: string;

  type:
    | "image"
    | "video"
    | "voice"
    | "music"
    | "workflow"
    | "export";

  name: string;

  url?: string;

  createdAt: string;
}

export interface CreatorProject {
  id: string;

  name: string;

  description?: string;

  createdAt: string;

  updatedAt: string;

  assets: ProjectAsset[];
}

const STORAGE_KEY =
  "creator-studio-projects";

function loadProjects(): CreatorProject[] {

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
      "LOAD PROJECTS ERROR"
    );

    console.error(error);

    return [];

  }
}

function saveProjects(
  projects: CreatorProject[]
) {

  if (
    typeof window ===
    "undefined"
  ) {
    return;
  }

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(projects)
  );
}

export function createProject(
  project: CreatorProject
) {

  const projects =
    loadProjects();

  projects.unshift(project);

  saveProjects(projects);

  return project;
}

export function getProjects() {
  return loadProjects();
}

export function getProjectById(
  id: string
) {

  return loadProjects().find(
    (project) =>
      project.id === id
  );
}

export function addAssetToProject(
  projectId: string,
  asset: ProjectAsset
) {

  const projects =
    loadProjects();

  const project =
    projects.find(
      (item) =>
        item.id === projectId
    );

  if (!project) {
    throw new Error(
      "Project not found"
    );
  }

  project.assets.push(asset);

  project.updatedAt =
    new Date().toISOString();

  saveProjects(projects);

  return project;
}

export function getProjectAssets(
  projectId: string
) {

  const project =
    getProjectById(
      projectId
    );

  return project?.assets || [];
}

export function deleteProject(
  id: string
) {

  const projects =
    loadProjects();

  const updated =
    projects.filter(
      (project) =>
        project.id !== id
    );

  saveProjects(updated);
}
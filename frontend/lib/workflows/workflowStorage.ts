export function saveWorkflowToStorage(
  workflow: any
) {
  localStorage.setItem(
    "mausam-workflow",
    JSON.stringify(workflow)
  );
}

export function loadWorkflowFromStorage() {
  const savedWorkflow =
    localStorage.getItem(
      "mausam-workflow"
    );

  if (!savedWorkflow) {
    return null;
  }

  return JSON.parse(savedWorkflow);
}

export function clearWorkflowStorage() {
  localStorage.removeItem(
    "mausam-workflow"
  );
}
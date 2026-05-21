export type QueueStatus =
  | "queued"
  | "running"
  | "completed"
  | "failed";

export interface QueueJob {
  id: string;

  type:
    | "image"
    | "video"
    | "image-to-video"
    | "voice"
    | "music"
    | "workflow";

  name: string;

  status: QueueStatus;

  createdAt: string;

  metadata?: Record<
    string,
    any
  >;
}

const STORAGE_KEY =
  "creator-studio-queue";

function loadQueue(): QueueJob[] {

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
      "LOAD QUEUE ERROR"
    );

    console.error(error);

    return [];

  }
}

function saveQueue(
  queue: QueueJob[]
) {

  if (
    typeof window ===
    "undefined"
  ) {
    return;
  }

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(queue)
  );
}

export function addJob(
  job: QueueJob
) {

  const queue =
    loadQueue();

  queue.unshift(job);

  saveQueue(queue);

  console.log(
    "QUEUE JOB ADDED",
    job
  );

  return job;
}

export function getJobs() {

  return loadQueue();
}

export function getJob(
  id: string
) {

  return loadQueue().find(
    (job) =>
      job.id === id
  );
}

export function updateJobStatus(
  id: string,
  status: QueueStatus
) {

  const queue =
    loadQueue();

  const job =
    queue.find(
      (item) =>
        item.id === id
    );

  if (!job) {

    console.warn(
      "QUEUE JOB NOT FOUND",
      id
    );

    return null;

  }

  job.status = status;

  saveQueue(queue);

  console.log(
    "QUEUE STATUS UPDATED",
    id,
    status
  );

  return job;
}

export function removeJob(
  id: string
) {

  const queue =
    loadQueue();

  const updated =
    queue.filter(
      (job) =>
        job.id !== id
    );

  saveQueue(updated);
}

export function clearQueue() {

  saveQueue([]);

  console.log(
    "QUEUE CLEARED"
  );
}
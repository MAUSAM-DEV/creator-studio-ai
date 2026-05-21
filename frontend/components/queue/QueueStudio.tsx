"use client";

import { useEffect, useState } from "react";

import {
  getJobs,
} from "@/lib/core/queueManager";

export default function QueueStudio() {
  const [jobs, setJobs] =
    useState<any[]>([]);

  useEffect(() => {
    setJobs(getJobs());
  }, []);

  return (
    <div className="p-10">

      <h1 className="text-5xl font-bold mb-8">
        Generation Queue
      </h1>

      {jobs.length === 0 ? (

        <div className="bg-[#0b1120] border border-white/10 rounded-2xl p-8 text-center text-gray-400">

          No jobs in queue yet

        </div>

      ) : (

        <div className="grid grid-cols-1 gap-4">

          {jobs.map((job) => (

            <div
              key={job.id}
              className="bg-[#0b1120] border border-white/10 rounded-2xl p-6"
            >
              <div className="flex justify-between items-center">

                <div>

                  <h3 className="text-xl font-semibold">
                    {job.name}
                  </h3>

                  <p className="text-gray-400">
                    {job.type}
                  </p>

                </div>

                <div>

                  {job.status ===
                    "completed" && (
                    <span className="text-green-400">
                      ✅ Completed
                    </span>
                  )}

                  {job.status ===
                    "running" && (
                    <span className="text-yellow-400">
                      🟡 Running
                    </span>
                  )}

                  {job.status ===
                    "queued" && (
                    <span className="text-blue-400">
                      🔵 Queued
                    </span>
                  )}

                  {job.status ===
                    "failed" && (
                    <span className="text-red-400">
                      🔴 Failed
                    </span>
                  )}

                </div>

              </div>
            </div>

          ))}

        </div>

      )}

    </div>
  );
}
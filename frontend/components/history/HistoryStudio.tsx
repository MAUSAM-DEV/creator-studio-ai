"use client";

import { useEffect, useState } from "react";

import {
  getHistory,
} from "@/lib/core/historyManager";

export default function HistoryStudio() {
  const [history, setHistory] =
    useState<any[]>([]);

  useEffect(() => {
    setHistory(getHistory());
  }, []);

  return (
    <div className="p-10">

      <h1 className="text-5xl font-bold mb-8">
        Generation History
      </h1>

      {history.length === 0 ? (

        <div className="bg-[#0b1120] border border-white/10 rounded-2xl p-8 text-center text-gray-400">

          No generation history yet

        </div>

      ) : (

        <div className="space-y-4">

          {history.map((item) => (

            <div
              key={item.id}
              className="bg-[#0b1120] border border-white/10 rounded-2xl p-6"
            >
              <div className="flex justify-between">

                <div>

                  <h3 className="font-semibold">
                    {item.type}
                  </h3>

                  <p className="text-gray-400">
                    {item.title}
                  </p>

                </div>

                <div className="text-gray-500">

                  {new Date(
                    item.createdAt
                  ).toLocaleDateString()}

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}
"use client";

import { useEffect, useState } from "react";

import {
  getAssets,
} from "@/lib/core/libraryManager";

export default function AssetLibrary() {
  const [assets, setAssets] =
    useState<any[]>([]);

  useEffect(() => {
    setAssets(getAssets());
  }, []);

  return (
    <div className="p-10">

      <h1 className="text-5xl font-bold mb-8">
        Asset Library
      </h1>

      {assets.length === 0 ? (

        <div className="bg-[#0b1120] border border-white/10 rounded-2xl p-8 text-center text-gray-400">

          No assets in library yet

        </div>

      ) : (

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {assets.map((asset) => (

            <div
              key={asset.id}
              className="bg-[#0b1120] border border-white/10 rounded-2xl p-6"
            >
              <h3 className="text-xl font-semibold">
                {asset.name}
              </h3>

              <p className="text-gray-400 mt-2">
                {asset.type}
              </p>

              <p className="text-gray-500 text-sm mt-3">
                {new Date(
                  asset.createdAt
                ).toLocaleDateString()}
              </p>

            </div>
          ))}

        </div>

      )}

    </div>
  );
}
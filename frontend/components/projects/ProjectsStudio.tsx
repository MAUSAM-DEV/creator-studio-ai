"use client";

import { useEffect, useState } from "react";

import {
  createProject,
  getProjects,
} from "@/lib/core/projectManager";

export default function ProjectsStudio() {
  const [projects, setProjects] =
    useState<any[]>([]);

  const [projectName, setProjectName] =
    useState("");

  useEffect(() => {
    setProjects(getProjects());
  }, []);

  const handleCreateProject = () => {

    if (!projectName.trim()) {
      return;
    }

    createProject({
      id: crypto.randomUUID(),

      name: projectName,

      description: "",

      createdAt:
        new Date().toISOString(),

      updatedAt:
        new Date().toISOString(),

      assets: [],
    });

    setProjects(
      [...getProjects()]
    );

    setProjectName("");
  };

  return (
    <div className="p-10">

      <h1 className="text-5xl font-bold mb-8">
        Projects
      </h1>

      <div className="flex gap-4 mb-8">

        <input
          value={projectName}
          onChange={(e) =>
            setProjectName(
              e.target.value
            )
          }
          placeholder="Project Name"
          className="flex-1 bg-[#0b1120] border border-white/10 rounded-xl p-4"
        />

        <button
          onClick={
            handleCreateProject
          }
          className="bg-cyan-600 hover:bg-cyan-500 px-6 rounded-xl"
        >
          Create
        </button>

      </div>

      {projects.length === 0 ? (

        <div className="bg-[#0b1120] border border-white/10 rounded-2xl p-8 text-center text-gray-400">

          No projects created yet

        </div>

      ) : (

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {projects.map(
            (project) => (

              <div
                key={project.id}
                className="bg-[#0b1120] border border-white/10 rounded-2xl p-6"
              >
                <h3 className="text-xl font-semibold">
                  {project.name}
                </h3>

                <p className="text-gray-400 mt-2">
                  Assets:
                  {" "}
                  {
                    project.assets
                      .length
                  }
                </p>

                <p className="text-gray-500 text-sm mt-3">
                  {new Date(
                    project.createdAt
                  ).toLocaleDateString()}
                </p>

              </div>

            )
          )}

        </div>

      )}

    </div>
  );
}
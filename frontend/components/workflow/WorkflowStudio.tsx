"use client";

import {
  useCallback,
  useMemo,
  useState,
} from "react";

import ReactFlow, {
  Background,
  Controls,
  addEdge,
  useEdgesState,
  useNodesState,
  Connection,
  Edge,
  Node,
  ReactFlowProvider,
} from "reactflow";

import "reactflow/dist/style.css";

import PromptNode from "./nodes/PromptNode";
import ImageNode from "./nodes/ImageNode";
import VideoNode from "./nodes/VideoNode";
import VoiceNode from "./nodes/VoiceNode";

const nodeTypes = {
  promptNode: PromptNode,
  imageNode: ImageNode,
  videoNode: VideoNode,
  voiceNode: VoiceNode,
};

const initialNodes: Node[] = [
  {
    id: "1",
    type: "promptNode",
    position: { x: 100, y: 200 },
    data: {},
  },
  {
    id: "2",
    type: "imageNode",
    position: { x: 420, y: 200 },
    data: {},
  },
  {
    id: "3",
    type: "videoNode",
    position: { x: 740, y: 200 },
    data: {},
  },
  {
    id: "4",
    type: "voiceNode",
    position: { x: 1060, y: 200 },
    data: {},
  },
];

const initialEdges: Edge[] = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    animated: true,
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    animated: true,
  },
  {
    id: "e3-4",
    source: "3",
    target: "4",
    animated: true,
  },
];

function WorkflowCanvas() {
  const [nodes, setNodes, onNodesChange] =
  useNodesState(initialNodes);

const updateNodeStatus = (
  nodeId: string,
  status: string
) => {
  setNodes((nds) =>
    nds.map((node) =>
      node.id === nodeId
        ? {
            ...node,
            data: {
              ...node.data,
              status,
            },
          }
        : node
    )
  );
};
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const deleteNode = useCallback(
    (nodeId: string) => {
      setNodes((nds) => nds.filter((node) => node.id !== nodeId));
      setEdges((eds) =>
        eds.filter(
          (edge) => edge.source !== nodeId && edge.target !== nodeId
        )
      );
    },
    [setNodes, setEdges]
  );

  const onConnect = useCallback(
    (params: Connection) => {
      setEdges((eds) => addEdge(params, eds));
    },
    [setEdges]
  );

  const styledNodes = useMemo(() => {
    return nodes.map((node) => ({
      ...node,
      data: {
        ...node.data,
        onDelete: () => deleteNode(node.id),
      },
    }));
  }, [nodes, deleteNode]);

  return (
    <div className="p-8">
      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setMode("standard")}
          className={`
            px-6 py-3 rounded-2xl border transition font-semibold
            ${
              mode === "standard"
                ? "bg-cyan-500 text-black border-cyan-400"
                : "bg-zinc-900 text-white border-zinc-700 hover:bg-zinc-800"
            }
          `}
        >
          Standard Workflow
        </button>

        <button
          onClick={() => setMode("visual")}
          className={`
            px-6 py-3 rounded-2xl border transition font-semibold
            ${
              mode === "visual"
                ? "bg-cyan-500 text-black border-cyan-400"
                : "bg-zinc-900 text-white border-zinc-700 hover:bg-zinc-800"
            }
          `}
        >
          Visual Workflow
        </button>
      </div>

      <div className="flex items-start justify-between gap-8 mb-10">
        <div>
          <h1 className="text-7xl font-black leading-none text-white">
            Workflow
            <br />
            Studio
          </h1>
          <p className="mt-4 text-2xl text-zinc-400">
            Professional AI Workflow Builder
          </p>
        </div>

        {mode === "visual" && (
  <div className="flex gap-4 pt-6">
          <button className="px-6 py-3 rounded-2xl border border-zinc-700 bg-zinc-900 text-white font-semibold hover:bg-zinc-800 transition">
            Save
          </button>
          <button className="px-6 py-3 rounded-2xl border border-zinc-700 bg-zinc-900 text-white font-semibold hover:bg-zinc-800 transition">
            Test
          </button>
          <button className="px-6 py-3 rounded-2xl border border-zinc-700 bg-zinc-900 text-white font-semibold hover:bg-zinc-800 transition">
            Reset
          </button>
          <button className="px-6 py-3 rounded-2xl border border-zinc-700 bg-zinc-900 text-white font-semibold hover:bg-zinc-800 transition">
            Clear
          </button>
          <button className="px-8 py-3 rounded-2xl bg-cyan-500 text-black font-bold hover:bg-cyan-400 transition">
            Run Workflow
          </button>
        </div>
)}
      </div>

      {mode === "standard" && (
        <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-10 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Standard Workflow Builder
          </h2>

          <p className="text-zinc-400 mb-8">
            Beginner-friendly AI workflow setup.
          </p>

          <textarea
            className="w-full h-52 rounded-2xl bg-zinc-900 border border-zinc-800 p-5 outline-none"
            placeholder="Describe your workflow..."
          />

          <button
  onClick={async () => {
  console.clear();

  console.log("=================================");
  console.log("WORKFLOW EXECUTION STARTED");
  console.log("=================================");

  for (const node of styledNodes) {

    updateNodeStatus(
      node.id,
      "running"
    );

    console.log(
      "Executing:",
      node.type
    );

    await new Promise(
      (resolve) =>
        setTimeout(resolve, 1200)
    );

    updateNodeStatus(
      node.id,
      "completed"
    );
  }

  console.log("=================================");
  console.log("WORKFLOW EXECUTION COMPLETED");
  console.log("=================================");
}}
    
  className="
    px-8 py-3
    rounded-2xl
    bg-cyan-500
    text-black
    font-bold
    hover:bg-cyan-400
    transition
  "
>
  <button
  onClick={async () => {
    console.clear();

    console.log("================================");
    console.log("WORKFLOW EXECUTION STARTED");
    console.log("================================");

    for (const node of styledNodes) {
      console.log(
        `Executing Node:`,
        node.data.label
      );

      updateNodeStatus(node.id, "running");

      await new Promise((resolve) =>
        setTimeout(resolve, 1500)
      );

      updateNodeStatus(node.id, "completed");

      console.log(
        `Completed Node:`,
        node.data.label
      );
    }

    console.log("================================");
    console.log("WORKFLOW EXECUTION COMPLETED");
    console.log("================================");
  }}
  className="
    px-8
    py-3
    rounded-2xl
    bg-cyan-500
    text-black
    font-bold
    hover:bg-cyan-400
    transition
  "
>
  Run Workflow
</button>

</button>
        </div>
      )}

      {mode === "visual" && (
        <div className="h-[700px] rounded-3xl border border-zinc-800 overflow-hidden">
          <div className="flex h-full">
            <div className="w-[300px] border-r border-zinc-800 bg-black p-6">
              <h2 className="text-4xl font-bold text-white">
                Workflow Nodes
              </h2>

              <p className="mt-3 text-zinc-500">
                Drag nodes into workflow
              </p>

              <div className="mt-8 space-y-5">
                <button className="w-full rounded-2xl border border-zinc-700 bg-zinc-900 px-5 py-6 text-left text-3xl font-semibold text-white">
                  Prompt Node
                </button>

                <button className="w-full rounded-2xl border border-cyan-900 bg-cyan-950/30 px-5 py-6 text-left text-3xl font-semibold text-white">
                  Image Node
                </button>

                <button className="w-full rounded-2xl border border-purple-900 bg-purple-950/30 px-5 py-6 text-left text-3xl font-semibold text-white">
                  Video Node
                </button>

                <button className="w-full rounded-2xl border border-orange-900 bg-orange-950/30 px-5 py-6 text-left text-3xl font-semibold text-white">
                  Voice Node
                </button>
              </div>
            </div>

            <div className="flex-1 bg-[#030712]">
              <ReactFlow
                nodes={styledNodes}
                edges={edges}
                nodeTypes={nodeTypes}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                fitView
              >
                <Background />
                <Controls />
              </ReactFlow>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function WorkflowStudio() {
  return (
    <ReactFlowProvider>
      <WorkflowCanvas />
    </ReactFlowProvider>
  );
}
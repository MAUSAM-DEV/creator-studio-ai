"use client";

import BaseWorkflowNode from "./BaseWorkflowNode";

export default function PromptNode(props: any) {
  return (
    <BaseWorkflowNode
      {...props}
      data={{
        ...props.data,
        label: "Prompt Input",
        description:
          "Workflow starting point",
        color: "#22c55e",
      }}
    />
  );
}
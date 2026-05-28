"use client";

import BaseWorkflowNode from "./BaseWorkflowNode";

export default function VoiceNode(props: any) {
  return (
    <BaseWorkflowNode
      {...props}
      data={{
        ...props.data,
        label: "Voice Generation",
        description:
          "Generate AI voice",
        color: "#f97316",
      }}
    />
  );
}
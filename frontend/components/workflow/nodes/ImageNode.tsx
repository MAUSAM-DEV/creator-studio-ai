"use client";

import BaseWorkflowNode from "./BaseWorkflowNode";

export default function ImageNode(props: any) {
  return (
    <BaseWorkflowNode
      {...props}
      data={{
        ...props.data,
        label: "Image Generation",
        description:
          "Generate AI images",
        color: "#06b6d4",
      }}
    />
  );
}
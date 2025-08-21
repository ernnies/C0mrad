import { Node as ReactFlowNode } from "reactflow";

export interface Block {
  id: string;
  type: "trigger" | "action" | "logic" | "transform" | "storage" | "ai" | "notification";
  label: string;
  description: string;
  config: Record<string, any>;
}

export interface Node extends ReactFlowNode {
  id: string;
  type: string | undefined; // Align with React Flow
  position: { x: number; y: number };
  data: {
    label: string;
    block: Block;
  };
}

export interface Edge {
  id: string;
  source: string;
  target: string;
  type?: string;
  [key: string]: any;
}
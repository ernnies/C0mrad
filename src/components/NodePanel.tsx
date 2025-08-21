import React from "react";
import { Block } from "@/types"; // Remove /index.ts
import { motion } from "framer-motion";

const blocks: Block[] = [
  {
    id: "priceAlert",
    type: "trigger",
    label: "Price Alert",
    description: "Triggers when an asset reaches a target price",
    config: { asset: "", price: 0 },
  },
  {
    id: "tradeExecutor",
    type: "action",
    label: "Trade Executor",
    description: "Executes a trade on a DeFi protocol",
    config: { amount: 0, asset: "" },
  },
  {
    id: "portfolioMonitor",
    type: "logic",
    label: "Portfolio Monitor",
    description: "Monitors portfolio value and balance",
    config: { threshold: 0 },
  },
];

interface NodePanelProps {
  onDragStart: (block: Block) => void;
}

const NodePanel: React.FC<NodePanelProps> = ({ onDragStart }) => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-64 bg-white p-4 border-r shadow-md"
    >
      <h2 className="text-lg font-semibold mb-4">Blocks</h2>
      {blocks.map((block) => (
        <div
          key={block.id}
          draggable
          onDragStart={() => onDragStart(block)}
          className="mb-2 p-2 bg-secondary text-white rounded-md cursor-move hover:bg-accent"
        >
          <h3 className="font-medium">{block.label}</h3>
          <p className="text-sm">{block.description}</p>
        </div>
      ))}
    </motion.div>
  );
};

export default NodePanel;
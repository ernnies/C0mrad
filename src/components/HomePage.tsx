import React, { useState, useCallback } from "react";
import Header from "@/components/Header";
import NodePanel from "@/components/NodePanel";
import WorkflowCanvas from "@/components/WorkflowCanvas";
import ConfigPanel from "@/components/ConfigPanel";
import { Block, Node, Edge } from "@/types";
import { v4 as uuidv4 } from "uuid";

const HomePage: React.FC = () => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);
  const [selectedNode, setSelectedNode] = useState<Block | null>(null);

  const handleDragStart = useCallback(
    (block: Block) => {
      const newNode: Node = {
        id: uuidv4(),
        type: block.type,
        position: { x: Math.random() * 500, y: Math.random() * 500 },
        data: { label: block.label, block },
      };
      setNodes((nds) => [...nds, newNode]);
    },
    []
  );

  const handleSaveConfig = useCallback(
    (config: Record<string, any>) => {
      setNodes((nds) =>
        nds.map((node) =>
          node.data.block.id === selectedNode?.id
            ? { ...node, data: { ...node.data, block: { ...node.data.block, config } } }
            : node
        )
      );
    },
    [selectedNode]
  );

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-grow">
        <NodePanel onDragStart={handleDragStart} />
        <WorkflowCanvas
          nodes={nodes}
          edges={edges}
          setNodes={setNodes}
          setEdges={setEdges}
          setSelectedNode={setSelectedNode}
        />
        <ConfigPanel
          selectedNode={selectedNode}
          onSave={handleSaveConfig}
          onClose={() => setSelectedNode(null)}
        />
      </div>
    </div>
  );
};

export default HomePage;
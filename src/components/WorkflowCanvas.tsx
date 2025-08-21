import React, { useCallback, Dispatch, SetStateAction } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  Connection,
  NodeChange,
  applyNodeChanges,
  Node as ReactFlowNode,
} from "reactflow";
import { Block, Node, Edge } from "@/types";

interface WorkflowCanvasProps {
  nodes: Node[];
  edges: Edge[];
  setNodes: Dispatch<SetStateAction<Node[]>>;
  setEdges: Dispatch<SetStateAction<Edge[]>>;
  setSelectedNode: (node: Block | null) => void;
}

const WorkflowCanvas: React.FC<WorkflowCanvasProps> = ({
  nodes,
  edges,
  setNodes,
  setEdges,
  setSelectedNode,
}) => {
  const onConnect = useCallback(
    (params: Connection) => {
      // Ensure source and target are non-null strings
      if (!params.source || !params.target) {
        return; // Skip if source or target is null
      }
      const newEdge: Edge = {
        id: `e${params.source}-${params.target}`,
        source: params.source,
        target: params.target,
        type: "default",
      };
      setEdges((eds) => [...eds, newEdge]);
    },
    [setEdges]
  );

  const onNodeClick = useCallback(
    (_event: React.MouseEvent, node: ReactFlowNode) => {
      // Ensure node has the expected data structure
      if (node.data && "block" in node.data) {
        setSelectedNode(node.data.block as Block);
      } else {
        setSelectedNode(null);
      }
    },
    [setSelectedNode]
  );

  const onNodesChange = useCallback(
    (changes: NodeChange[]) => {
      setNodes((nds) =>
        applyNodeChanges(changes, nds).map((node) => ({
          ...node,
          type: node.type || "default", // Ensure type is always string
          data: node.data as { label: string; block: Block }, // Type assertion for safety
        }))
      );
    },
    [setNodes]
  );

  const onEdgesChange = useCallback(
    (changes: any[]) => {
      setEdges(edges); // Simplified; update if edge changes are needed
    },
    [edges, setEdges]
  );

  return (
    <div className="flex-grow">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        fitView
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
};

export default WorkflowCanvas;
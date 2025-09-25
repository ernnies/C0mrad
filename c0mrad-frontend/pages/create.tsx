// pages/create.tsx
import DragDropBuilder from "../components/DragDropBuilder";

export default function Create() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-4xl font-bold text-blue-400 mb-8 text-center">
        Create Your Workflow
      </h1>
      <DragDropBuilder />
    </div>
  );
}
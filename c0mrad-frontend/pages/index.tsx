// pages/index.tsx
import DragDropBuilder from "../components/DragDropBuilder";
import Dashboard from "../components/Dashboard";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-blue-600 p-4 text-center">
        <h1 className="text-3xl font-bold">C0mrad</h1>
      </header>
      <main className="container mx-auto p-4">
        <DragDropBuilder />
        <Dashboard />
      </main>
    </div>
  );
}
import React from "react";
import HomePage from "@/components/HomePage"; // Remove .tsx
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
};

export default App;
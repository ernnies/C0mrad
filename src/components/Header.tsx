import React, { useState } from "react";
import Button from "@/components/ui/Button"; // Remove .tsx
import { motion } from "framer-motion";

const Header: React.FC = () => {
  const [isConnected, setIsConnected] = useState(false);

  const connectWallet = async () => {
    try {
      setIsConnected(true);
    } catch (error) {
      console.error("Wallet connection failed:", error);
    }
  };

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-primary text-white p-4 flex justify-between items-center shadow-lg"
    >
      <div className="flex items-center space-x-2">
        <h1 className="text-xl font-bold">C0mrad</h1>
      </div>
      <div>
        <Button
          onClick={connectWallet}
          className={`${
            isConnected ? "bg-green-500" : "bg-secondary"
          } hover:bg-accent transition-colors duration-300`}
        >
          {isConnected ? "Connected" : "Connect Wallet"}
        </Button>
      </div>
    </motion.header>
  );
};

export default Header;
import React, { useState } from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { Block } from "@/types";
import { motion } from "framer-motion";

interface ConfigPanelProps {
  selectedNode: Block | null;
  onSave: (config: Record<string, any>) => void;
  onClose: () => void;
}

const ConfigPanel: React.FC<ConfigPanelProps> = ({
  selectedNode,
  onSave,
  onClose,
}) => {
  const [config, setConfig] = useState<Record<string, any>>(
    selectedNode?.config || {}
  );

  const handleChange = (key: string, value: any) => {
    setConfig((prev: Record<string, any>) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    onSave(config);
    onClose();
  };

  if (!selectedNode) return null;

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-64 bg-white p-4 border-l shadow-md"
    >
      <h2 className="text-lg font-semibold mb-4">{selectedNode.label}</h2>
      {Object.keys(selectedNode.config).map((key) => (
        <div key={key} className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </label>
          <Input
            type="text"
            value={config[key]}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(key, e.target.value)
            }
            className="mt-1"
          />
        </div>
      ))}
      <div className="flex space-x-2">
        <Button onClick={handleSave} className="bg-secondary hover:bg-accent">
          Save
        </Button>
        <Button
          onClick={onClose}
          variant="outline"
          className="border-gray-300"
        >
          Cancel
        </Button>
      </div>
    </motion.div>
  );
};

export default ConfigPanel;
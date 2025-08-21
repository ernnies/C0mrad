import React, { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils"; // Remove .ts

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      className={cn(
        "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary",
        className
      )}
      {...props}
    />
  );
};

export default Input; // Ensure export is present
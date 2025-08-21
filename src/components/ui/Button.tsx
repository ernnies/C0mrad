import React, { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

const Button: React.FC<ButtonProps> = ({
  variant = "default",
  className,
  children,
  ...props
}) => {
  const baseStyles = "px-4 py-2 rounded-md font-medium transition-colors duration-300";
  const variantStyles =
    variant === "outline"
      ? "border border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
      : "bg-secondary text-white hover:bg-accent";

  return (
    <button className={cn(baseStyles, variantStyles, className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
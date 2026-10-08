import type { ReactNode } from "react";

interface ButtonProps {
  variant: "primary" | "outline";
  children: ReactNode;
  type?: "button" | "reset" | "submit";
  disabled?: boolean;
  onChange?: () => void;
  onClick?: () => void;
}

export const Button = ({
  variant = "primary",
  children,
  onClick,
  onChange,
  type = "button",
  disabled,
}: ButtonProps) => {
  const baseStyles =
    "flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg font-medium cursor-pointer hover:opacity-100 hover:scale-[98%] active:opacity-70 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100";
  const variants = {
    primary: "bg-accent text-canvas w-fit",
    outline: "text-ink border border-border-strong active:border-accent",
  };
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]}`}
      onChange={onChange}
      onClick={onClick}>
      {children}
    </button>
  );
};

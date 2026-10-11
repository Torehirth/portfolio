import type { ReactNode } from "react";
import { Link } from "react-router";

interface ButtonLinkProps {
  to: string;
  variant: "primary" | "outline";
  children: ReactNode;
  onClick?: () => void;
}

export const ButtonLink = ({ to, variant = "primary", children, onClick }: ButtonLinkProps) => {
  const variants = {
    primary:
      "bg-accent flex items-center gap-2 justify-center text-canvas px-6 py-2.5 rounded-lg hover:opacity-100 hover:scale-[98%] active:opacity-70 w-fit font-medium",
    outline:
      "flex items-center justify-center gap-2 text-ink border border-border-strong px-6 py-2.5 rounded-lg  active:border-accent font-medium hover:opacity-100 hover:scale-[98%] active:opacity-70",
  };
  return (
    <Link to={to} className={variants[variant]} onClick={onClick}>
      {children}
    </Link>
  );
};

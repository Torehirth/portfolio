import type { ReactNode } from "react";
import { Link } from "react-router";

interface ButtonLinkProps {
  to: string;
  variant: "primary" | "outline" | "textLink" | "subtleLink";
  children: ReactNode;
  onClick?: () => void;
}

export const ButtonLink = ({ to, variant = "primary", children, onClick }: ButtonLinkProps) => {
  const variants = {
    primary:
      "bg-accent inline-block text-canvas px-6 py-2.5 rounded-lg hover:bg-accent-dark hover:opacity-100 active:scale-95 w-fit font-medium",
    outline:
      "inline-block text-ink border border-border-strong px-6 py-2.5 rounded-lg  active:border-accent font-medium",
    textLink: "text-accent hover:text-accent-dark",
    subtleLink: "text-ink hover:text-accent",
  };
  return (
    <Link to={to} className={variants[variant]} onClick={onClick}>
      {children}
    </Link>
  );
};

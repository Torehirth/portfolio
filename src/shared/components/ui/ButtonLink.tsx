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
    primary: "bg-accent text-canvas px-8 py-3 rounded-lg hover:bg-accent-dark",
    outline: "text-ink border border-border-strong px-6 py-3 rounded-lg hover:bg-subtle",
    textLink: "text-accent hover:text-accent-dark",
    subtleLink: "text-ink hover:text-accent",
  };
  return (
    <Link to={to} className={variants[variant]} onClick={onClick}>
      {children}
    </Link>
  );
};

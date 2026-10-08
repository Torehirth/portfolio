import type { ReactNode } from "react";

interface ExternalButtonLinksProps {
  href: string;
  children: ReactNode;
  variant: "primary" | "outline";
}

export const ExternalButtonLinks = ({ href, children, variant }: ExternalButtonLinksProps) => {
  const variants = {
    primary:
      "bg-accent text-canvas px-6 py-2.5 gap-2 rounded-lg hover:bg-accent-dark text-center hover:opacity-100 active:scale-95  font-medium w-full flex items-center justify-center",
    outline:
      "text-center text-text border border-border-strong px-6 py-2 rounded-lg  active:border-accent font-medium w-full flex gap-2 items-center justify-center",
  };

  return (
    <a href={href} target="_blank" rel="noreferrer noopener" className={variants[variant]}>
      {children}
    </a>
  );
};

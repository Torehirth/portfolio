import { type ReactNode } from "react";

interface FeedbackPopupProps {
  children: ReactNode;
  className: string;
}

export const FeedbackPopup = ({ children, className }: FeedbackPopupProps) => {
  return <span className={className}>{children}</span>;
};

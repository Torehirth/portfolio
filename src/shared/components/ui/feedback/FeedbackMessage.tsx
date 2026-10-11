import { CircleAlert, CircleCheck, Info, TriangleAlert } from "lucide-react";

interface FeedbackMessageProps {
  variant: "error" | "success" | "warning" | "info";
  message: string;
}

export const FeedbackMessage = ({ variant, message }: FeedbackMessageProps) => {
  const baseStyles = "flex items-center gap-3 rounded-lg border px-4 py-3 text-sm";

  const variants = {
    error: "border-red-800/30 bg-red-400/10 text-red-900",
    success: "border-green-800/30 bg-green-300/10 text-green-900 ",
    warning: "border-amber-800/30 bg-amber-400/10 text-amber-900 ",
    info: "border-slate-600/30 bg-slate-600/10 text-slate-700 ",
  };

  const icons = {
    error: CircleAlert,
    warning: TriangleAlert,
    info: Info,
    success: CircleCheck,
  };

  const Icon = icons[variant];

  return (
    <div
      role={variant === "error" || variant === "warning" ? "warning" : "info"}
      className={`${baseStyles} ${variants[variant]}`}>
      <Icon size={48} className="shrink-0" aria-hidden="true" />
      <p>{message}</p>
    </div>
  );
};

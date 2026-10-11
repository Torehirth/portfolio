export const Loader = () => {
  return (
    <div className="flex space-x-1.5">
      <span className="bg-accent h-2 w-2 animate-ping rounded-full"></span>
      <span className="bg-accent h-2 w-2 animate-ping rounded-full [animation-delay:-0.2s]"></span>
      <span className="bg-accent h-2 w-2 animate-ping rounded-full [animation-delay:-0.4s]"></span>
    </div>
  );
};

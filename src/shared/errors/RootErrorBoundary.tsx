import { CircleAlert } from "lucide-react";
import { ButtonLink } from "../components/ui/buttons/ButtonLink";

export const RootErrorBoundary = () => {
  return (
    <div className="h-screen">
      <section className="mx-auto my-auto flex h-full max-w-[90%] flex-col justify-center gap-12 px-4 sm:max-w-[60%] md:px-8">
        <article className="flex flex-col items-center gap-6 text-center">
          <CircleAlert className="text-accent h-20 w-20" />
          <h1 className="text-h1 flex gap-2 font-medium">Something went wrong! </h1>
          <p className="text-lg">Click the button below to return to the home page.</p>
        </article>
        <div className="flex w-full justify-center">
          <ButtonLink to="/" variant="primary">
            Go to home
          </ButtonLink>
        </div>
      </section>
    </div>
  );
};

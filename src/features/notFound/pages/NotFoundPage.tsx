import { CircleAlert } from "lucide-react";
import { ButtonLink } from "./../../../shared/components/ui/buttons/ButtonLink";

export const NotFoundPage = () => {
  return (
    <section className="mt-12 flex flex-1 items-center justify-center md:mt-0">
      <div className="mx-auto flex max-w-[90%] flex-col gap-4 px-4 sm:max-w-[60%] md:px-8">
        <article className="flex flex-col items-center gap-4 text-center">
          <CircleAlert className="text-accent h-20 w-20" />
          <h1 className="text-hero flex font-medium">404</h1>
          <p className="text-h2 flex font-medium">You're on the wrong path..</p>
          <p className="text-lg">Click the button below to return to the home page.</p>
        </article>
        <div className="flex w-full justify-center">
          <ButtonLink to="/" variant="primary">
            Go to home
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};

import { Mail, Map, Pencil } from "lucide-react";
import { Button } from "../../../shared/components/ui/buttons/Button";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { FeedbackMessage } from "../../../shared/components/ui/feedback/FeedbackMessage";
import { Loader } from "./../../../shared/components/ui/loader/Loader";
import { fetchApi } from "../services/fetchApi";

interface Inputs {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactPage = () => {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({ mode: "onChange" });

  const sendMessage: SubmitHandler<Inputs> = async (data) => {
    setError(null);
    try {
      await fetchApi({
        url: "https://formspree.io/f/xzedranr",
        method: "POST",
        formData: data,
      });

      setSuccess(true);
    } catch (caughtError) {
      if (caughtError instanceof Error) {
        setError(caughtError.message);
      } else {
        setError("Could not send message!");
      }
    }
  };

  const inputClass =
    "peer focus:ring-accent/30 w-full focus:ring cursor-pointer rounded-lg bg-surface  px-4 pt-5 pb-2 outline-none";
  const labelClass =
    "peer-focus:text-accent absolute top-2 left-4 cursor-pointer text-xs transition-all duration-200 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs";

  return (
    <>
      {/* === Meta === */}
      <title>Contact | Tore Hirth – Front-End Developer</title>
      <meta
        name="description"
        content="Get in touch with Tore Hirth, a front-end developer interested in new opportunities, collaborations and building modern, accessible web experiences."
      />
      <meta property="og:title" content="Contact | Tore Hirth – Front-End Developer" />
      <meta
        property="og:description"
        content="Get in touch with Tore Hirth, a front-end developer interested in new opportunities, collaborations and building modern, accessible web experiences."
      />
      <meta property="og:image" content="https://torehirth.no/og-image.jpg" />
      <meta property="og:url" content="https://torehirth.no/contact" />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Contact | Tore Hirth – Front-End Developer" />
      <meta
        name="twitter:description"
        content="Get in touch with Tore Hirth, a front-end developer interested in new opportunities, collaborations and building modern, accessible web experiences."
      />
      <meta name="twitter:image" content="https://torehirth.no/og-image.jpg" />
      {/* === Content === */}
      {error && (
        <div className="mx-auto mt-24 max-w-xl">
          <FeedbackMessage variant="error" message="test test test"></FeedbackMessage>
        </div>
      )}
      <div className="px-4 py-16 md:px-8 md:py-28">
        <div className="max-w-layout mx-auto grid gap-12 md:grid-cols-[1fr_1fr] md:gap-8 md:px-8">
          <section>
            <p className="text-accent mb-5 font-mono text-xs tracking-[3px] uppercase">Contact</p>
            <h1 className="text-4xl font-medium tracking-tight md:text-6xl">Let&apos;s talk.</h1>
            <p className="text-muted mt-6 max-w-lg text-base leading-7">
              If you&apos;re looking for a front-end developer, want to talk about a project, or
              simply want to get in touch, send me a message.
            </p>
            <div className="order-2 mt-10 flex flex-col gap-2">
              <p className="text-accent flex items-center gap-2 font-mono text-xs tracking-[3px] uppercase">
                <Mail size={16} className="text-accent" />
                Email
              </p>
              <a href="mailto:torehirth@gmail.com" className="font-medium underline">
                torehirth@gmail.com
              </a>
            </div>
            <div className="mt-6 flex flex-col gap-2 md:mt-10">
              <p className="text-accent flex items-center gap-2 font-mono text-xs tracking-[3px] uppercase">
                <span>
                  <Map size={16} className="text-accent" />
                </span>
                Address
              </p>
              <p>Voss, Norway</p>
            </div>
          </section>
          <section className="relative mt-2 md:mt-0">
            {success && (
              <div className="mb-8">
                <FeedbackMessage
                  variant="success"
                  message="Thanks for reaching out. I'll be in touch shortly! "
                />
              </div>
            )}
            {isSubmitting && (
              <div className="absolute top-1/2 right-1/2 z-50 mx-auto flex w-full translate-x-1/2 -translate-y-1/2 justify-center">
                <Loader />
              </div>
            )}
            <h2 className="text-accent flex items-center gap-2 font-mono text-xs tracking-[3px] uppercase">
              <span>
                <Pencil size={16} />
              </span>
              Contact form
            </h2>
            <form className="" onSubmit={handleSubmit(sendMessage)} noValidate>
              <fieldset className="mt-4 space-y-7 md:mt-8" disabled={isSubmitting}>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    placeholder=" "
                    autoComplete="name"
                    className={inputClass}
                    {...register("name", {
                      required: "Please enter your name",
                      minLength: { value: 2, message: "Name must contain at least 2 characters" },
                    })}
                  />
                  <label htmlFor="name" className={labelClass}>
                    Enter your name <span className="text-xs">(required)</span>
                  </label>
                  {errors.name && (
                    <p className="mt-1 -mb-3 text-sm text-red-700">{String(errors.name.message)}</p>
                  )}
                </div>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    placeholder=" "
                    autoComplete="email"
                    {...register("email", {
                      required: "Please enter your email address",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Please enter a valid email address",
                      },
                    })}
                    className={inputClass}
                  />
                  <label htmlFor="email" className={labelClass}>
                    Enter Your email address <span className="text-xs">(required)</span>
                  </label>
                  {errors.email && (
                    <p className="mt-1 -mb-3 text-sm text-red-700">
                      {String(errors.email.message)}
                    </p>
                  )}
                </div>
                <div className="relative">
                  <input
                    type="text"
                    id="subject"
                    placeholder=" "
                    {...register("subject", {
                      required: "Please enter a subject",
                      minLength: {
                        value: 4,
                        message: "Subject must contain at least 3 characters",
                      },
                      maxLength: { value: 90, message: "Subject cannot exceed 90 characters" },
                    })}

                    className={inputClass}
                  />
                  <label htmlFor="subject" className={labelClass}>
                    Enter a subject <span className="text-xs">(required)</span>
                  </label>
                  {errors.subject && (
                    <p className="mt-1 -mb-3 text-sm text-red-700">Subject is required</p>
                  )}
                </div>
                <div className="relative">
                  <textarea
                    id="message"
                    placeholder=" "
                    rows={8}
                    className={inputClass}
                    {...register("message", {
                      required: "Please enter a message",
                      minLength: {
                        value: 50,
                        message: "Message must contain at least 50 characters",
                      },
                      maxLength: { value: 1000, message: "Message cannot exceed 1000 characters" },
                    })}
                  />
                  <label htmlFor="message" className={labelClass}>
                    Write your message <span className="text-xs">(required)</span>
                  </label>
                  {errors.message && (
                    <p className="mt-1 -mb-3 text-sm text-red-700">
                      {String(errors.message.message)}
                    </p>
                  )}
                </div>
                <Button variant="primary" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send message"}
                </Button>
              </fieldset>
            </form>
          </section>
        </div>
      </div>
    </>
  );
};

import { ArrowRight } from "lucide-react";
import profileImg from "../../../shared/assets/images/profile2.webp";
import { ButtonLink } from "../../../shared/components/ui/buttons/ButtonLink";

export const AboutPage = () => {
  return (
    <>
      {/* === Meta === */}
      <title>About Me | Tore Hirth</title>
      <meta
        name="description"
        content="Learn about Tore Hirth, a front-end developer with a background in mechanics and customer service, now focused on React, TypeScript and accessible web development."
      />
      <meta property="og:title" content="About Me | Tore Hirth" />
      <meta
        property="og:description"
        content="Learn about Tore Hirth, a front-end developer with a background in mechanics and customer service, now focused on React, TypeScript and accessible web development."
      />
      <meta property="og:image" content="https://torehirth.no/og-image.jpg" />
      <meta property="og:url" content="https://torehirth.no/about" />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="About Me | Tore Hirth" />
      <meta
        name="twitter:description"
        content="Learn about Tore Hirth, a front-end developer with a background in mechanics and customer service, now focused on React, TypeScript and accessible web development."
      />
      <meta name="twitter:image" content="https://torehirth.no/og-image.jpg" />
      {/* === Content === */}
      <section className="flex flex-col gap-10 md:gap-20">
        <div className="px-4 pt-16 md:px-8 md:pt-28">
          <div className="max-w-layout mx-auto md:px-8">
            <p className="text-accent mb-5 font-mono text-xs tracking-[3px] uppercase">About</p>
            <h1 className="text-h1 md:text-h1 max-w-4xl font-medium tracking-tight">
              Building interfaces that make sense.
            </h1>
            <p className="md:text-h3 mt-4 leading-7 md:mt-6">
              I didn’t start out in software, but problem-solving has always been part of my job.
            </p>
          </div>
        </div>
        <div className="px-4 pb-14 md:px-8 md:pb-28">
          <div className="max-w-layout mx-auto grid gap-10 md:grid-cols-[1fr_1fr] md:px-8">
            <div>
              <img
                src={profileImg}
                alt="Tore Hirth's profile image"
                className="aspect-square w-full rounded-xl object-cover md:max-w-md"
              />
            </div>
            <div className="space-y-7 leading-7">
              <p>
                Before moving into development, I spent several years working as a mechanic and
                later in customer service at a truck dealership. I handled much of the customer
                contact and coordinated work for a large team of mechanics. A customer rarely
                arrives with a perfectly described problem, so a big part of the job was listening,
                asking the right questions and figuring out what they actually needed before finding
                the right way forward.
              </p>
              <p>
                That way of thinking has followed me into development. I like understanding the
                problem before jumping into the solution, and I care about building interfaces that
                make sense to the people who use them.
              </p>
              <p>
                Outside of work and coding, I spend a lot of my time training, climbing, skiing and
                generally finding reasons to be outdoors.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section aria-labelledby="process-heading" className="bg-subtle px-4 py-14 md:px-8 md:py-24">
        <div className="max-w-layout mx-auto md:px-8">
          <div className="flex flex-col gap-10">
            <div>
              <p className="text-accent mb-3 font-mono text-xs tracking-[3px] uppercase">
                How I work
              </p>
              <h2 id="process-heading" className="text-2xl font-medium md:text-3xl">
                From idea to finished product.
              </h2>
            </div>
            <div className="max-w-4xl space-y-7 leading-7">
              <p>
                My interest in design was what first drew me towards front-end development, but I
                quickly found that I enjoyed the programming side just as much. I work mainly with
                React and TypeScript, but my projects involve much more than coding.
              </p>
              <p>
                I take projects from the initial idea through prototyping, style guides and visual
                design, development, user testing, technical testing and refinement. Git and GitHub
                are also a natural part of how I work with projects and collaborate with others.
              </p>
              <p>
                Clean, minimal design, accessibility and responsive interfaces are areas I care
                about, and I like being involved in the whole process rather than only one part of
                it. I also value learning, solving practical problems and working with others to
                turn ideas into something that actually works.
              </p>
              <p>
                I'm now looking to bring that combination of development skills, practical
                experience and customer understanding into a developer role.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <ButtonLink variant="primary" to="/contact">
                  Get in touch
                  <ArrowRight className="-mr-2" />
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section aria-labelledby="stack-heading" className="bg-canvas px-4 py-14 md:px-8 md:py-24">
        <div className="max-w-layout mx-auto md:px-8">
          <p className="text-accent mb-3 font-mono text-xs tracking-[3px] uppercase">Stack</p>
          <h2 id="stack-heading" className="text-2xl font-medium md:text-3xl">
            Technologies &amp; tools
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-4">
            <section className="border-border rounded-xl border p-5">
              <h3 className="text-accent font-mono text-xs tracking-[3px] uppercase">
                Development
              </h3>
              <ul className="mt-5 space-y-2 font-mono text-sm">
                <li>React · TypeScript · JavaScript</li>
                <li>Tailwind CSS · CSS · Bootstrap</li>
                <li>API integration</li>
                <li>Scalable architecture</li>
              </ul>
            </section>
            <section className="border-border rounded-xl border p-5">
              <h3 className="text-accent font-mono text-xs tracking-[3px] uppercase">
                Design & UX
              </h3>
              <ul className="mt-5 space-y-2 font-mono text-sm">
                <li>Figma · Prototyping</li>
                <li>Style guides</li>
                <li>Accessibility</li>
                <li>User testing</li>
              </ul>
            </section>
            <section className="border-border rounded-xl border p-5">
              <h3 className="text-accent font-mono text-xs tracking-[3px] uppercase">
                Quality & workflow
              </h3>
              <ul className="mt-5 space-y-2 font-mono text-sm">
                <li>Git · GitHub</li>
                <li>Project planning</li>
                <li>Iterations</li>
                <li>From idea to finished product</li>
              </ul>
            </section>
            <section className="border-border rounded-xl border p-5">
              <h3 className="text-accent font-mono text-xs tracking-[3px] uppercase">How I work</h3>
              <ul className="mt-5 space-y-2 font-mono text-sm">
                <li>Understanding user needs / problems</li>
                <li>Clear communication</li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

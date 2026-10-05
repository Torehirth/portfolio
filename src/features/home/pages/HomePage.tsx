import { Link } from "react-router";
import { ButtonLink } from "../../../shared/components/ui/buttons/ButtonLink";
import { projects } from "../../../shared/data/projects";

export const HomePage = () => {
  const data = projects;
  return (
    <>
      {/* SEO */}
      <title>Front-end Developer | Tore Hirth</title>
      <meta
        name="description"
        content="Front-end developer working with React and TypeScript. Explore my projects, skills and experience building accessible user interfaces."
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://torehirth.no/" />
      <meta property="og:title" content="Tore Hirth | Front-End Developer" />
      <meta
        property="og:description"
        content="Front-end developer working with React and TypeScript. Explore my projects and development work."
      />
      <meta property="og:url" content="https://torehirth.no/" />
      <meta property="og:type" content="website" />
      {/* content */}
      <section className="max-w-layout mx-auto w-full px-4 pt-16 pb-12 md:px-8 md:pt-40 md:pb-36">
        <div className="">
          <p className="text-accent mb-4 font-mono text-xs tracking-[6px] uppercase">
            <span aria-hidden="true">●</span> Available for work
          </p>
          <h1 className="text-hero font-medium tracking-tight">Tore Hirth.</h1>
          <p className="mt-7 max-w-2xl text-base leading-7 md:text-lg">
            Front-end developer. I build clean and accessible interfaces with React and TypeScript,
            all the way from an idea to a launched product.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink variant="primary" to="/projects">
              View my work
            </ButtonLink>
            <ButtonLink variant="outline" to="/about">
              View my work
            </ButtonLink>
            <a
              href="https://github.com/Torehirth"
              className="px-2 py-3"
              rel="noreferrer noopener"
              target="_blank">
              GitHub ↗
            </a>
          </div>
          <p className="text-muted mt-10 font-mono text-xs leading-6 md:mt-16">
            React&nbsp;&nbsp;|&nbsp;&nbsp;TypeScript&nbsp;&nbsp;|&nbsp;&nbsp;Tailwind
            CSS&nbsp;&nbsp;|&nbsp;&nbsp;Headless WordPress&nbsp;&nbsp;|&nbsp;&nbsp;Figma
            &nbsp;&nbsp;|&nbsp;&nbsp;Git
          </p>
        </div>
      </section>
      {/* Projects */}
      <section aria-labelledby="projects-heading" className="bg-surface py-14 md:py-28">
        <div className="max-w-layout mx-auto px-4 md:px-8">
          <div className="mb-8 flex w-full items-end justify-between">
            <div>
              <p className="text-accent mb-3 font-mono text-xs tracking-[0.18em] uppercase">
                Selected work
              </p>
              <h2 id="projects-heading" className="text-2xl font-medium md:text-3xl">
                Recent projects
              </h2>
            </div>
            <Link to="/projects" className="hidden md:block">
              All projects →
            </Link>
          </div>
          <ul className="grid gap-4 md:grid-cols-2">
            {data.slice(0, 2).map((project) => (
              <li key={project.id}>
                <article className="border-border overflow-hidden rounded-xl border">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="aspect-video w-full object-cover"
                  />
                  <div className="p-5 md:p-6">
                    <p className="font-mono text-xs capitalize">
                      <span className="text-accent">● {project.year}</span> · {project.type} project
                    </p>
                    <h3 className="mt-4 text-xl font-medium">{project.title}</h3>
                    <p className="text-muted mt-3 leading-6">{project.shortDescription}</p>
                    <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
                      {project.technologies.map((tech) => (
                        <li
                          key={tech}
                          className="border-border rounded border px-2 py-1 font-mono text-xs">
                          {tech}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={`/projects/${project.id}`}
                      className="text-accent mt-5 inline-block font-medium">
                      View case study →
                    </Link>
                  </div>
                </article>
              </li>
            ))}
          </ul>
          <a href="/projects" className="mt-8 inline-block md:hidden">
            See all projects →
          </a>
        </div>
      </section>
      {/* About teaser */}
      <section aria-labelledby="about-heading" className="bg-subtle py-14 md:py-24">
        <div className="max-w-layout mx-auto grid gap-10 px-4 md:grid-cols-[1.1fr_1fr] md:items-center md:px-8">
          <div>
            <p className="text-accent mb-3 font-mono text-xs tracking-[0.18em] uppercase">About</p>
            <h2 id="about-heading" className="max-w-sm text-2xl font-medium md:text-3xl">
              I build interfaces around people, not just code.
            </h2>
            <p className="text-muted mt-5 max-w-xl leading-7">
              Before moving into front-end development, I spent years working with customers and
              solving practical problems. That experience still shapes how I work today —
              understanding what people actually need before deciding how to build it. I work mainly
              with React and TypeScript, but my projects also cover UI design in Figma,
              accessibility, API's and the full process from idea to deployed product.
            </p>
            <a href="/about" className="text-accent mt-6 inline-block font-medium">
              More about how I work →
            </a>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <section className="border-border bg-background rounded-xl border p-5">
              <h3 className="text-accent font-mono text-xs tracking-[0.15em] uppercase">
                Languages
              </h3>
              <ul className="mt-4 space-y-2 font-mono text-sm">
                <li>TypeScript</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS / Sass</li>
              </ul>
            </section>
            <section className="border-border bg-background rounded-xl border p-5">
              <h3 className="text-accent font-mono text-xs tracking-[0.15em] uppercase">
                Frameworks
              </h3>
              <ul className="mt-4 space-y-2 font-mono text-sm">
                <li>React</li>
                <li>React Router</li>
                <li>Vite</li>
                <li>Node.js</li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

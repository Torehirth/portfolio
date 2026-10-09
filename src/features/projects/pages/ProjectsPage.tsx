import { Link } from "react-router";
import { projects } from "../../../shared/data/projects";

export const ProjectsPage = () => {
  const data = projects;
  return (
    <>
      {/* === Meta === */}
      <title>Front-End Development Projects | Tore Hirth</title>
      <meta
        name="description"
        content="Explore front-end projects by Tore Hirth, including web applications built with React, TypeScript, JavaScript and modern development tools."
      />
      <meta property="og:title" content="Front-End Development Projects | Tore Hirth" />
      <meta
        property="og:description"
        content="Explore front-end projects by Tore Hirth, including web applications built with React, TypeScript, JavaScript and modern development tools."
      />
      <meta property="og:image" content="https://torehirth.no/og-image.jpg" />
      <meta property="og:url" content="https://torehirth.no/projects" />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Front-End Development Projects | Tore Hirth" />
      <meta
        name="twitter:description"
        content="Explore front-end projects by Tore Hirth, including web applications built with React, TypeScript, JavaScript and modern development tools."
      />
      <meta name="twitter:image" content="https://torehirth.no/og-image.jpg" />
      {/* === Content === */}
      <section className="py-16 md:py-24">
        <div className="max-w-layout mx-auto px-4 md:px-8">
          <p className="text-accent mb-5 px-4 font-mono text-xs tracking-[0.18em] uppercase md:px-8">
            Work
          </p>
          <div className="flex items-end justify-between">
            <h1 className="text-h1 font-medium tracking-tight">Projects</h1>
            <p className="font-mono text-xs">{data.length} projects</p>
          </div>
          <div className="mt-12 md:mt-20">
            {/* Project */}
            <ul className="flex flex-col gap-8 md:gap-12">
              {data.map((project) => (
                <li key={project.id} className="ease-in-out hover:scale-[99.5%]">
                  <article className="relative overflow-hidden rounded-xl hover:shadow-md md:grid md:grid-cols-[0.38fr_0.62fr]">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      className="h-full min-h-64 w-full object-cover"
                    />
                    <div className="flex flex-col justify-between p-6 md:p-10">
                      <div>
                        <p className="text-muted font-mono text-xs">
                          <span className="text-accent">● {project.year}</span>
                        </p>
                        <h2 className="mt-6 text-2xl font-medium md:text-3xl">{project.title}</h2>
                        <p className="text-muted mt-4 max-w-2xl leading-7">
                          {project.shortDescription}
                        </p>
                        <ul className="mt-5 flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <li
                              key={tech}
                              className="border-border rounded border px-2 py-1 font-mono text-xs">
                              {tech}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Link
                        to={`/projects/${project.id}`}
                        className="text-accent mt-7 font-medium after:absolute after:inset-0 md:self-end">
                        Case study →
                      </Link>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

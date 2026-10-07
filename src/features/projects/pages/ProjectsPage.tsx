import { Link } from "react-router";
import { projects } from "../../../shared/data/projects";

export const ProjectsPage = () => {
  const data = projects;
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-layout mx-auto px-4 md:px-8">
        <p className="text-accent mb-5 px-4 font-mono text-xs tracking-[0.18em] uppercase md:px-8">
          Work
        </p>
        <div className="flex items-end justify-between">
          <h1 className="text-4xl font-medium tracking-tight md:text-6xl">Projects</h1>
          <p className="font-mono text-xs">{data.length} projects</p>
        </div>
        <div className="mt-12 md:mt-20">
          {/* Project */}
          <ul className="flex flex-col gap-8 md:gap-12">
            {data.map((project) => (
              <li key={project.id} className="ease-in-out hover:scale-[99.5%]">
                <Link to={`/projects/${project.id}`} className="hover:opacity-100">
                  <article className="border-border bg-surface overflow-hidden rounded-xl border md:grid md:grid-cols-[0.38fr_0.62fr]">
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
                        className="text-accent mt-7 font-medium md:self-end">
                        Case study →
                      </Link>
                    </div>
                  </article>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

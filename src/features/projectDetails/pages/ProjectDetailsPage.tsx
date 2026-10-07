import { useParams } from "react-router";
import { projects } from "../../../shared/data/projects";
import { Share2, X } from "lucide-react";
import { ExternalButtonLinks } from "../../../shared/components/ui/buttons/ExternalButtonLinks";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  XIcon,
  XShareButton,
} from "react-share";
import { useState } from "react";

export const ProjectDetailPage = () => {
  const [popupOpen, setPopupOpen] = useState<boolean>(false);

  const { id } = useParams();
  const project = projects.find((project) => project.id.toLowerCase() === id?.toLowerCase());

  if (!project) {
    return;
  }

  const closeShareButtonPopup = () => {
    setPopupOpen(false);
  };

  return (
    <>
      <article>
        <header className="px-4 pt-16 pb-10 md:px-8 md:pt-24 md:pb-14">
          <div className="max-w-layout mx-auto md:px-8">
            <a href="/projects" className="font-mono text-xs">
              ← All projects
            </a>
            <p className="mt-8 font-mono text-xs tracking-[2px] uppercase md:mt-12">
              {project.type} · {project.year}
            </p>
            <h1 className="mt-5 text-4xl font-medium md:text-6xl">{project.title}</h1>
            <p className="text-muted mt-6 max-w-3xl text-lg leading-8">
              {project.shortDescription}
            </p>
            <figure className="mt-10 md:mt-14">
              <img
                src={project.image}
                alt={project.imageAlt}
                className="aspect-video w-full rounded-xl object-cover"
              />
              <figcaption className="text-muted mt-3 text-sm">{project.imageAlt}</figcaption>
            </figure>
          </div>
        </header>
        {/* Metadata */}
        <section
          aria-label="Project information"
          className="border-border bg-subtle border-y px-4 py-6 md:px-8">
          <div className="max-w-layout relative mx-auto flex flex-col gap-7 md:flex-row md:items-end md:justify-between md:px-8">
            <dl className="grid grid-cols-2 gap-x-10 gap-y-6 md:grid-cols-3">
              <div>
                <dt className="text-muted font-mono text-xs uppercase">Tech</dt>
                {project.technologies.map((tech) => {
                  return (
                    <dd key={tech} className="mt-2 text-sm">
                      {tech}
                    </dd>
                  );
                })}
              </div>
              <div>
                <dt className="text-muted font-mono text-xs uppercase">Role</dt>
                <dd className="mt-2 text-sm capitalize">{project.role}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase">Year</dt>
                <dd className="mt-2 text-sm">{project.year}</dd>
              </div>
            </dl>
            <div className="flex flex-col items-center gap-4 md:min-w-120 md:flex-row md:gap-6">
              <button
                onClick={() => setPopupOpen((prevState) => !prevState)}
                className="cursor-pointer"
                aria-label="share project">
                <Share2 aria-hidden="true" className="text-accent stroke-2" />
              </button>
              <ExternalButtonLinks variant="primary" href={project.liveUrl}>
                Live website
              </ExternalButtonLinks>
              <ExternalButtonLinks variant="outline" href={project.repoUrl}>
                Github
              </ExternalButtonLinks>
              {popupOpen && (
                <nav className="bg-canvas absolute bottom-40 z-30 flex gap-4 rounded-xl px-16 py-12 md:right-105 md:bottom-15">
                  <button
                    onClick={closeShareButtonPopup}
                    type="button"
                    className="absolute top-0 right-0 mt-2 mr-2 cursor-pointer"
                    aria-label="Close sharing menu">
                    <X />
                  </button>
                  <LinkedinShareButton
                    onClick={closeShareButtonPopup}
                    url={project.liveUrl}
                    aria-label="Share on Facebook">
                    <LinkedinIcon round size={28} />
                  </LinkedinShareButton>
                  <EmailShareButton
                    subject="Hva synes du?"
                    body="Hei, Kom over denne nettsiden - verdt å sjekke ut!"
                    url={project.liveUrl}
                    aria-label="Share by email">
                    <EmailIcon round size={28} />
                  </EmailShareButton>
                  <FacebookShareButton
                    onClick={closeShareButtonPopup}
                    url={project.liveUrl}
                    hashtag={`#${project.title}`}
                    aria-label="Share on Facebook">
                    <FacebookIcon round size={28} />
                  </FacebookShareButton>
                  <XShareButton
                    onClick={closeShareButtonPopup}
                    title="Read this next"
                    via="reactshare"
                    hashtags={[
                      `#${project.title}`,
                      `#${project.technologies[0]}`,
                      `#${project.technologies[1]}`,
                      "website",
                    ]}
                    url={project.liveUrl}
                    aria-label="Share on X">
                    <XIcon size={28} round />
                  </XShareButton>
                </nav>
              )}
            </div>
          </div>
        </section>
        {/* Article body */}
        <div className="px-4 py-14 md:px-8 md:py-24">
          <div className="max-w-layout mx-auto">
            <div className="max-w-3xl space-y-16 md:px-8">
              <section aria-labelledby="overview-heading">
                <h2 id="overview-heading" className="text-2xl font-medium">
                  Overview
                </h2>
                <p className="text-muted mt-5 leading-7">{project.overview}</p>
              </section>
              <section aria-labelledby="approach-heading">
                <h2 id="approach-heading" className="text-2xl font-medium">
                  Approach
                </h2>
                <p className="text-muted mt-5 leading-7">{project.approach}</p>
              </section>
              <section aria-labelledby="challenges-heading">
                <h2 id="challenges-heading" className="text-2xl font-medium">
                  Challenges
                </h2>
                <p className="text-muted mt-5 leading-7">{project.challenges}</p>
              </section>
              <section aria-labelledby="learned-heading">
                <h2 id="learned-heading" className="text-2xl font-medium">
                  What I learned
                </h2>
                <p className="text-muted mt-5 leading-7">{project.learned}</p>
              </section>
            </div>
          </div>
        </div>
      </article>
      {/* Backdrop blur */}
      {popupOpen && (
        <div
          className="fixed inset-0 top-0 z-10 backdrop-blur-xs"
          onClick={closeShareButtonPopup}></div>
      )}
    </>
  );
};

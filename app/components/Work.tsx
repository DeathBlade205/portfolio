import { featuredProjects } from "../lib/data";
import ProjectMedia from "./ProjectMedia";

function hostOf(url: string) {
  try {
    return new URL(url).host.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export default function Work() {
  return (
    <section id="work" className="px-5 pb-10 pt-20 sm:px-10 sm:pt-20">
      <div className="mb-12 flex items-baseline justify-between">
        <h2 className="m-0 font-semibold leading-none tracking-[-0.02em] text-[clamp(30px,5vw,68px)]">
          Selected Work
        </h2>
        <span className="font-mono text-[12px] tracking-[0.12em] text-mut">
          (01 — SHOWCASE)
        </span>
      </div>

      {featuredProjects.map((project) => (
        <a
          key={project.num}
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group mb-16 block border-t border-line pt-6 last:mb-6"
        >
          <div className="mb-[22px] flex items-start justify-between gap-6">
            <div className="flex items-baseline gap-[18px]">
              <span className="font-mono text-[13px] text-accent">
                {project.num}
              </span>
              <div>
                <div className="font-semibold leading-none tracking-[-0.02em] text-[clamp(26px,3.4vw,44px)] transition-colors group-hover:text-accent">
                  {project.title}
                </div>
                <div className="mt-1.5 font-serif text-[19px] italic text-mut">
                  {project.subtitle}
                </div>
              </div>
            </div>
            <span className="whitespace-nowrap font-mono text-[12px] text-mut">
              {project.year} ↗
            </span>
          </div>

          <ProjectMedia
            src={project.image}
            title={project.title}
            host={hostOf(project.href)}
          />

          <div className="mt-[18px] flex flex-wrap gap-2 font-mono text-[11px] tracking-[0.04em] text-mut">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-line px-[11px] py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </a>
      ))}

      <div className="border-t border-line pt-10 text-center">
        <a
          href="/work"
          className="inline-flex items-center gap-2.5 font-mono text-[13px] tracking-[0.08em] text-ink transition-colors hover:text-accent"
        >
          VIEW ALL PROJECTS <span>→</span>
        </a>
      </div>
    </section>
  );
}

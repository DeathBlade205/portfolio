import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ProjectMedia from "../components/ProjectMedia";
import { workProjects } from "../lib/data";

export const metadata = { title: "Work — Sadat Sagar" };

function hostOf(url: string) {
  try {
    return new URL(url).host.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export default function WorkPage() {
  return (
    <>
      <Nav active="work" />
      <main>
        {/* HEADER */}
        <section className="px-5 pb-10 pt-16 sm:px-10">
          <p className="font-mono text-[12px] uppercase tracking-[0.22em] text-mut">
            Index — 2025 / 2026
          </p>
          <h1 className="mt-[18px] font-bold leading-[0.86] tracking-[-0.03em] text-[clamp(48px,12vw,180px)]">
            Selected
            <br />
            <span className="font-serif font-normal italic">Work</span>
          </h1>
          <p className="mt-8 max-w-[600px] font-serif text-[clamp(20px,2.4vw,30px)] italic leading-[1.3]">
            A focused practice in commerce &amp; real-time interfaces — from
            3D-driven storefronts to consolidated multi-brand platforms.
          </p>
        </section>

        {/* PROJECT DETAILS */}
        <section className="px-5 pb-10 pt-6 sm:px-10">
          {workProjects.map((project) => (
            <article
              key={project.num}
              className="mb-24 border-t border-line pt-10 last:mb-10"
            >
              <div className="flex flex-col gap-8">
                <div className="flex flex-wrap items-start justify-between gap-5">
                  <div className="flex items-baseline gap-5">
                    <span className="font-mono text-[14px] text-accent">
                      {project.num}
                    </span>
                    <div>
                      <h2 className="m-0 font-semibold leading-[0.95] tracking-[-0.025em] text-[clamp(34px,5vw,72px)]">
                        {project.title}
                      </h2>
                      <div className="mt-2 font-serif text-[21px] italic text-mut">
                        {project.subtitle}
                      </div>
                    </div>
                  </div>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whitespace-nowrap rounded-full border border-ink px-[18px] py-[11px] font-mono text-[12px] tracking-[0.06em] text-ink transition-colors hover:bg-ink hover:text-paper"
                  >
                    VISIT LIVE ↗
                  </a>
                </div>

                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <ProjectMedia
                    src={project.image}
                    title={project.title}
                    host={hostOf(project.href)}
                    size="lg"
                  />
                </a>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-10">
                  <p className="m-0 max-w-[620px] text-[clamp(17px,1.6vw,21px)] leading-[1.5]">
                    {project.description}
                  </p>
                  <div className="flex flex-col gap-3 font-mono text-[12px] tracking-[0.03em] text-mut">
                    {project.meta.map((row, i) => (
                      <div
                        key={row.label}
                        className={`flex justify-between ${
                          i < project.meta.length - 1
                            ? "border-b border-line pb-2"
                            : ""
                        }`}
                      >
                        <span>{row.label}</span>
                        <span className="text-ink">{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}

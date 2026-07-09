import Nav from "../components/Nav";
import Footer from "../components/Footer";
import LiveClock from "../components/LiveClock";
import {
  profile,
  aboutIntro,
  aboutBody,
  capabilities,
  stackTools,
  background,
} from "../lib/data";

export const metadata = { title: "About — Sadat Sagar" };

function SectionHead({ title, tag }: { title: string; tag: string }) {
  return (
    <div className="mb-9 flex items-baseline justify-between border-t border-line pt-6">
      <h2 className="m-0 font-semibold tracking-[-0.02em] text-[clamp(26px,4vw,52px)]">
        {title}
      </h2>
      <span className="font-mono text-[12px] tracking-[0.12em] text-mut">
        {tag}
      </span>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <Nav active="about" />
      <main>
        {/* HEADER */}
        <section className="px-5 pb-10 pt-16 sm:px-10">
          <p className="font-mono text-[12px] uppercase tracking-[0.22em] text-mut">
            Profile — {profile.role}
          </p>
          <h1 className="mt-[18px] font-bold leading-[0.86] tracking-[-0.03em] text-[clamp(48px,12vw,180px)]">
            About
            <br />
            <span className="font-serif font-normal italic">me</span>
          </h1>
        </section>

        {/* BIO + PORTRAIT */}
        <section className="grid grid-cols-1 items-start gap-12 border-t border-line px-5 pb-10 pt-12 sm:px-10 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
          <div>
            <p className="m-0 font-serif text-[clamp(24px,3vw,40px)] italic leading-[1.25]">
              {aboutIntro}
            </p>
            <p className="mt-7 max-w-[640px] text-[clamp(16px,1.5vw,19px)] leading-[1.6] text-mut">
              {aboutBody}
            </p>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full bg-ink px-[22px] py-[13px] font-mono text-[12px] tracking-[0.06em] text-paper transition-colors hover:bg-accent"
              >
                GET IN TOUCH →
              </a>
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-ink px-[22px] py-[13px] font-mono text-[12px] tracking-[0.06em] text-ink transition-colors hover:bg-ink hover:text-paper"
              >
                RESUME ↗
              </a>
              <a
                href="/work"
                className="rounded-full border border-line px-[22px] py-[13px] font-mono text-[12px] tracking-[0.06em] text-mut transition-colors hover:border-ink hover:text-ink"
              >
                SEE THE WORK
              </a>
            </div>
          </div>

          {/* PROFILE CARD — editorial spec sheet in place of a portrait */}
          <aside className="flex flex-col justify-between gap-10 rounded-[10px] border border-line bg-surf p-[26px] sm:p-[30px]">
            <div className="flex items-start justify-between">
              <span
                aria-hidden="true"
                className="sg-spin select-none text-4xl leading-none text-accent"
              >
                ✶
              </span>
              <span className="font-mono text-[11px] tracking-[0.16em] text-mut">
                (PROFILE)
              </span>
            </div>

            <div className="font-semibold leading-[0.95] tracking-[-0.02em] text-[clamp(34px,4vw,48px)]">
              Sadat
              <br />
              <span className="font-serif font-normal italic">Sagar</span>
            </div>

            <div className="flex flex-col gap-[10px] font-mono text-[12px] tracking-[0.03em] text-mut">
              <div className="flex justify-between gap-4 border-b border-line pb-[10px]">
                <span>LOCATION</span>
                <span className="text-ink">{profile.location}</span>
              </div>
              <div className="flex justify-between gap-4 border-b border-line pb-[10px]">
                <span>LOCAL TIME</span>
                <LiveClock className="text-ink" />
              </div>
              <div className="flex justify-between gap-4 border-b border-line pb-[10px]">
                <span>STATUS</span>
                <span className="inline-flex items-center gap-[7px] text-ink">
                  <span className="sg-pulse h-[7px] w-[7px] rounded-full bg-accent" />
                  AVAILABLE
                </span>
              </div>
              <div className="flex justify-between gap-4">
                <span>FOCUS</span>
                <span className="text-ink">COMMERCE / FULL-STACK</span>
              </div>
            </div>
          </aside>
        </section>

        {/* CAPABILITIES */}
        <section className="px-5 pb-10 pt-16 sm:px-10">
          <SectionHead title="Capabilities" tag="(WHAT I DO)" />
          <div className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-3">
            {capabilities.map((cap) => (
              <div key={cap.num} className="bg-paper p-[30px]">
                <div className="font-mono text-[12px] text-accent">
                  {cap.num}
                </div>
                <div className="mt-3.5 text-[22px] font-semibold tracking-[-0.01em]">
                  {cap.title}
                </div>
                <p className="mt-2.5 text-[15px] leading-[1.5] text-mut">
                  {cap.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* STACK */}
        <section className="px-5 pb-10 pt-6 sm:px-10">
          <SectionHead title="Stack" tag="(TOOLS)" />
          <div className="flex flex-wrap gap-2.5 font-mono text-[13px] tracking-[0.02em]">
            {stackTools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-line px-4 py-2"
              >
                {tool}
              </span>
            ))}
          </div>
        </section>

        {/* BACKGROUND */}
        <section className="px-5 pb-10 pt-16 sm:px-10">
          <SectionHead title="Background" tag="(JOURNEY)" />
          <div>
            {background.map((item) => (
              <div
                key={item.title}
                className="grid grid-cols-[80px_1fr_auto] items-baseline gap-5 border-t border-line py-[22px] sm:grid-cols-[120px_1fr_auto] sm:gap-6"
              >
                <span className="font-mono text-[13px] text-mut">
                  {item.period}
                </span>
                <div>
                  <div className="text-[21px] font-semibold tracking-[-0.01em]">
                    {item.title}
                  </div>
                  <div className="mt-1 text-[15px] text-mut">{item.detail}</div>
                </div>
                <span className="font-mono text-[12px] text-accent">
                  {item.tag}
                </span>
              </div>
            ))}
            <div className="border-t border-line" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

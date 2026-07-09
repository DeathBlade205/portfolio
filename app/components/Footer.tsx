import { profile } from "../lib/data";
import LiveClock from "./LiveClock";

export default function Footer() {
  return (
    <footer className="mt-10 bg-ink px-5 pb-9 pt-20 text-paper sm:px-10">
      <div className="font-mono text-[12px] tracking-[0.18em] text-accent">
        ( LET&rsquo;S BUILD SOMETHING )
      </div>

      <a
        href={`mailto:${profile.email}`}
        className="mt-5 block font-semibold leading-[0.9] tracking-[-0.03em] text-[clamp(40px,9vw,150px)] transition-opacity hover:opacity-70"
      >
        Say hello<span className="text-accent">.</span>
      </a>

      <div className="mt-[60px] flex flex-wrap items-end justify-between gap-8 border-t border-paper/15 pt-[26px] font-mono text-[12px] tracking-[0.04em] text-paper/60">
        <div className="flex flex-col gap-1.5">
          <span className="text-paper">{profile.email}</span>
          <span>{profile.phone}</span>
          <span className="flex gap-1.5">
            Sydney, NSW — <LiveClock />
          </span>
        </div>

        <div className="flex flex-col gap-1.5">
          <a href="/work" className="transition-colors hover:text-paper">
            WORK
          </a>
          <a href="/about" className="transition-colors hover:text-paper">
            ABOUT
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-paper"
          >
            RESUME ↗
          </a>
        </div>

        <div className="flex flex-col gap-1.5">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-paper"
          >
            LINKEDIN ↗
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-paper"
          >
            GITHUB ↗
          </a>
        </div>

        <div>© 2026 — BUILT BY HAND</div>
      </div>
    </footer>
  );
}

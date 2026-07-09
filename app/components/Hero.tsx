import { profile, heroStats } from "../lib/data";
import LiveClock from "./LiveClock";

export default function Hero() {
  return (
    <section className="relative px-5 pb-8 pt-16 sm:px-10 sm:pb-[30px] sm:pt-16">
      {/* spinning asterisk */}
      <div
        aria-hidden="true"
        className="sg-spin pointer-events-none absolute right-5 top-14 select-none text-[56px] leading-none text-accent sm:right-10 sm:top-10 sm:text-[120px]"
      >
        ✶
      </div>

      <p className="max-w-[calc(100%-70px)] font-mono text-[12px] uppercase tracking-[0.22em] text-mut sm:max-w-none">
        {profile.location} — {profile.role}
      </p>

      <h1 className="mt-[18px] font-bold leading-[0.86] tracking-[-0.03em] text-[clamp(56px,15vw,232px)]">
        SADAT
        <br />
        <span className="font-serif font-normal italic tracking-normal">
          Sagar
        </span>
      </h1>

      <div className="mt-9 flex flex-wrap items-end justify-between gap-8 border-t border-line pt-[26px] sm:gap-10">
        <p className="m-0 max-w-[560px] font-serif text-[clamp(22px,2.6vw,34px)] italic leading-[1.25]">
          {profile.tagline}
        </p>

        <div className="flex min-w-[200px] flex-col gap-2 font-mono text-[12px] tracking-[0.04em] text-mut">
          {heroStats.map((stat) => (
            <div key={stat.label} className="flex justify-between gap-6">
              <span>{stat.label}</span>
              <span className="text-ink">{stat.value}</span>
            </div>
          ))}
          <div className="flex justify-between gap-6">
            <span>SYDNEY</span>
            <LiveClock className="text-ink" />
          </div>
          <a
            href="#work"
            className="mt-1.5 flex items-center gap-2 text-ink transition-colors hover:text-accent"
          >
            SCROLL <span className="text-sm">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}

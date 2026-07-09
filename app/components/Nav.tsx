import { profile } from "../lib/data";
import ThemeToggle from "./ThemeToggle";

export default function Nav({ active }: { active?: "work" | "about" }) {
  const linkClass = (key: "work" | "about") =>
    active === key
      ? "text-ink"
      : "text-mut transition-colors hover:text-ink";

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-[color-mix(in_srgb,var(--paper)_82%,transparent)] backdrop-blur-md">
      <nav className="flex items-center justify-between gap-3 px-5 py-4 sm:px-10 sm:py-5">
        <a
          href="/"
          className="whitespace-nowrap text-[15px] font-bold tracking-[-0.01em] sm:text-base"
        >
          <span className="hidden min-[360px]:inline">Sadat Sagar</span>
          <span className="min-[360px]:hidden">SS</span>
          <span className="text-accent">®</span>
        </a>

        <div className="flex items-center gap-[14px] font-mono text-[12px] tracking-[0.04em] sm:gap-[26px]">
          <a href="/work" className={linkClass("work")}>
            Work
          </a>
          <a href="/about" className={linkClass("about")}>
            About
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="text-mut transition-colors hover:text-ink"
          >
            Contact
          </a>
          <span className="hidden items-center gap-[7px] text-ink md:inline-flex">
            <span className="sg-pulse h-[7px] w-[7px] rounded-full bg-accent" />
            Available
          </span>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

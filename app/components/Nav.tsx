import { profile } from "../lib/data";
import ThemeToggle from "./ThemeToggle";

export default function Nav({ active }: { active?: "work" | "about" }) {
  const linkClass = (key: "work" | "about") =>
    active === key
      ? "text-ink"
      : "text-mut transition-colors hover:text-ink";

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-[color-mix(in_srgb,var(--paper)_82%,transparent)] backdrop-blur-md">
      <nav className="flex items-center justify-between px-5 py-4 sm:px-10 sm:py-5">
        <a href="/" className="text-base font-bold tracking-[-0.01em]">
          Sadat Sagar<span className="text-accent">®</span>
        </a>

        <div className="flex items-center gap-4 font-mono text-[12px] tracking-[0.04em] sm:gap-[26px]">
          <a href="/work" className={`hidden sm:inline ${linkClass("work")}`}>
            Work
          </a>
          <a href="/about" className={`hidden sm:inline ${linkClass("about")}`}>
            About
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="text-mut transition-colors hover:text-ink"
          >
            Contact
          </a>
          <span className="hidden items-center gap-[7px] text-ink sm:inline-flex">
            <span className="sg-pulse h-[7px] w-[7px] rounded-full bg-accent" />
            Available
          </span>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

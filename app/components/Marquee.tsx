import { marqueeItems } from "../lib/data";

export default function Marquee() {
  const sequence = marqueeItems.join("  ✶  ") + "  ✶  ";

  return (
    <div className="mt-6 overflow-hidden border-y border-line py-3.5">
      <div className="sg-marquee flex w-max whitespace-nowrap font-medium tracking-[-0.01em] text-mut">
        <span className="px-0">{sequence}</span>
        <span aria-hidden="true">{sequence}</span>
      </div>
    </div>
  );
}

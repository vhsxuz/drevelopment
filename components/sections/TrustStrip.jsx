"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "react-countup";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

/** Numbers count when they are actually on screen, and the count is short. */
export default function TrustStrip({ t }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} aria-label={t.trust.heading} className="container mx-auto">
      <RevealGroup className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
        {t.trust.items.map((item) => (
          <RevealItem key={item.label}>
            <div className="card flex h-full flex-col gap-1 p-6">
              <span className="t-mono text-[34px] font-bold leading-none tracking-[-0.03em] xl:text-[42px]">
                {inView ? <CountUp end={item.num} duration={1.2} /> : 0}
                {item.suffix}
              </span>
              <p className="t-caption text-ink-2">{item.label}</p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}

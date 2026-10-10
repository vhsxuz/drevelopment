"use client";

import dynamic from "next/dynamic";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

/**
 * The heading is always in the HTML; the interactive stage is code-split and
 * only mounts once it is near the viewport. A visitor who never scrolls this
 * far downloads none of it.
 *
 * The placeholder reserves the stage's height, so deferred mounting cannot
 * shift the layout - this is where CLS budgets usually die.
 */
const DemoStage = dynamic(() => import("./DemoStage"), {
  ssr: false,
  loading: () => <div className="min-h-[560px]" aria-hidden />,
});

export default function LiveDemo({ t }) {
  const ref = useRef(null);
  const near = useInView(ref, { once: true, margin: "400px" });

  return (
    <section id="live-demo" ref={ref} className="container mx-auto scroll-mt-28">
      <RevealGroup>
        <RevealItem className="text-center">
          <p className="t-label text-accent">{t.demo.eyebrow}</p>
          <h2 className="t-title mt-3 text-balance">{t.demo.title}</h2>
          <p className="t-body mx-auto mt-3 max-w-[56ch] text-pretty text-ink-2">
            {t.demo.lead}
          </p>
        </RevealItem>
      </RevealGroup>

      <div className="mt-12 min-h-[560px]">{near && <DemoStage t={t} />}</div>
    </section>
  );
}

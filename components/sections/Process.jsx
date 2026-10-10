import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

/** Four steps. Answers "what do I actually get" before it is asked. */
export default function Process({ t }) {
  return (
    <section className="container mx-auto">
      <RevealGroup>
        <RevealItem>
          <p className="t-label text-accent">{t.process.eyebrow}</p>
          <h2 className="t-title mt-3 text-balance">{t.process.title}</h2>
        </RevealItem>

        <ol className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {t.process.steps.map((step, index) => (
            <RevealItem as="li" key={step.title}>
              <div className="card flex h-full flex-col gap-3 p-6">
                <span className="t-mono text-[13px] font-semibold text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="t-subhead">{step.title}</h3>
                <p className="t-caption text-pretty text-ink-2">{step.body}</p>
              </div>
            </RevealItem>
          ))}
        </ol>
      </RevealGroup>
    </section>
  );
}

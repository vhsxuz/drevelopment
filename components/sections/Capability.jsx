import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

/** The stack, stated plainly - a competence signal for the corporate reader. */
export default function Capability({ t }) {
  return (
    <section className="container mx-auto">
      <RevealGroup className="card flex flex-col gap-6 p-8 sm:p-12">
        <RevealItem>
          <p className="t-label text-accent">{t.capability.eyebrow}</p>
          <h2 className="t-title mt-3 text-balance">{t.capability.title}</h2>
        </RevealItem>
        <RevealItem>
          <ul className="flex flex-wrap gap-2">
            {t.capability.items.map((item) => (
              <li
                key={item}
                className="t-mono rounded-full border border-line/12 px-4 py-2 text-[13px] text-ink-2"
              >
                {item}
              </li>
            ))}
          </ul>
        </RevealItem>
      </RevealGroup>
    </section>
  );
}

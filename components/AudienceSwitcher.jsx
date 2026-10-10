"use client";

import { Children, useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { segments as allSegments } from "@/lib/i18n";
import { spring } from "@/lib/motion";

/**
 * The switcher owns nothing but the active key.
 *
 * The server renders all three content sets into the HTML and hands them here
 * as children; this component toggles visibility on subtrees it was given.
 * No fetch, no re-render of the page, no loading state, and the content
 * dictionary never ships to the browser.
 *
 * Deliberately NOT using `useSearchParams`: it opts the nearest Suspense
 * boundary out of static rendering, which left all three panels missing from
 * the prerendered HTML - the page's main selling copy, invisible to crawlers.
 * The query param is read after mount instead, so the static HTML always
 * carries every panel and a `?for=` deep link just switches on arrival.
 */
export default function AudienceSwitcher({
  defaultSegment,
  labels,
  heading,
  hint,
  children,
}) {
  const [active, setActive] = useState(defaultSegment);

  // Deep links resolve after hydration, which keeps the page static.
  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("for");
    if (allSegments.includes(requested)) setActive(requested);
  }, []);

  const select = useCallback((segment) => {
    setActive(segment);
    // replaceState rather than the router: the URL here is a share aid, not a
    // navigation, and this costs no round-trip and adds no history entry.
    const url = new URL(window.location.href);
    url.searchParams.set("for", segment);
    window.history.replaceState(null, "", url);
  }, []);

  const onKeyDown = (event) => {
    const i = allSegments.indexOf(active);
    if (event.key === "ArrowRight") {
      event.preventDefault();
      select(allSegments[(i + 1) % allSegments.length]);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      select(allSegments[(i - 1 + allSegments.length) % allSegments.length]);
    }
  };

  const panels = Children.toArray(children);

  return (
    <section aria-labelledby="audience-heading" className="container mx-auto">
      <div className="flex flex-col items-center gap-3 text-center">
        <h2 id="audience-heading" className="t-title text-balance">
          {heading}
        </h2>
        <p className="t-body text-ink-2">{hint}</p>
      </div>

      {/* Scroll-snapping row on narrow screens rather than a dropdown: a
          dropdown hides two of the three segments behind a tap, and the whole
          point is that a visitor sees themselves immediately. */}
      <div
        role="tablist"
        aria-label={heading}
        onKeyDown={onKeyDown}
        className="no-scrollbar mx-auto mt-8 flex max-w-full snap-x snap-mandatory gap-1 overflow-x-auto rounded-[16px] bg-sunken p-1 sm:w-fit"
      >
        {allSegments.map((segment) => {
          const selected = segment === active;
          return (
            <button
              key={segment}
              role="tab"
              id={`tab-${segment}`}
              aria-selected={selected}
              aria-controls={`panel-${segment}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => select(segment)}
              style={{ touchAction: "manipulation" }}
              className={`relative shrink-0 snap-start whitespace-nowrap rounded-[12px] px-5 py-3 text-[15px] font-medium transition-colors duration-200 ${
                selected ? "text-ink" : "text-ink-2 hover:text-ink"
              }`}
            >
              {selected && (
                <motion.span
                  layoutId="audience-indicator"
                  transition={spring.snappy}
                  className="absolute inset-0 rounded-[12px] bg-surface shadow-sm"
                />
              )}
              <span className="relative z-10">{labels[segment]}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-10">
        {allSegments.map((segment, index) => {
          const selected = segment === active;
          return (
            <div
              key={segment}
              role="tabpanel"
              id={`panel-${segment}`}
              aria-labelledby={`tab-${segment}`}
              // The `hidden` attribute, not a display class: it removes the
              // panel from the accessibility tree reliably, while leaving the
              // markup in the document for crawlers.
              hidden={!selected}
            >
              {selected ? (
                <motion.div
                  key={segment}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={spring.move}
                >
                  {panels[index]}
                </motion.div>
              ) : (
                panels[index]
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

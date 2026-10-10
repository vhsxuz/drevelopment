"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Minimalist hero: a flat colour disc, a cut-out portrait over it, oversized
 * two-line display type, and quiet supporting text either side.
 *
 * Ported from the TSX original to JSX (this project is JavaScript - see
 * `"tsx": false` in components.json) with three deliberate changes:
 *
 *  1. Tokens. The original used `bg-background` / `text-foreground`, which do
 *     not exist in this Tailwind config; they are mapped to `canvas` / `ink`.
 *  2. Timing. The original staggered to 1.0s and 1.2s, which leaves the
 *     headline and body invisible for over a second. The order is kept, the
 *     scale is compressed ~5x, so it reads the same without the dead air.
 *  3. next/image instead of <img>, to stay inside the route's JS and image
 *     budget and to keep the portrait from shifting layout as it loads.
 *
 * Header and footer rows render only when given props, so the component can
 * sit under the site's existing floating chrome without doubling the nav.
 */

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="text-sm font-medium tracking-widest text-ink-2 transition-colors hover:text-ink"
  >
    {children}
  </a>
);

/**
 * `icon` may be a component (client-side usage, as in the original API) or an
 * already-rendered element. A Server Component cannot pass a function across
 * the client boundary, so rendering the element on the server and handing the
 * node down is the only thing that works there.
 */
const SocialIcon = ({ href, icon, label }) => {
  const Icon = typeof icon === "function" ? icon : null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-ink-2 transition-colors hover:text-ink"
    >
      {Icon ? <Icon className="h-5 w-5" /> : icon}
    </a>
  );
};

export function MinimalistHero({
  logoText,
  navLinks,
  mainText,
  readMoreLink,
  readMoreLabel = "Read More",
  imageSrc,
  imageAlt,
  imagePriority = true,
  overlayText,
  socialLinks,
  locationText,
  discClassName = "bg-accent",
  className,
}) {
  const reduceMotion = useReducedMotion();

  // Reduced motion keeps the arrival but drops the displacement - a
  // non-vestibular equivalent, not an absence of feedback.
  const rise = (delay) =>
    reduceMotion
      ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.2, delay } }
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay },
        };

  return (
    <div
      className={cn(
        "relative flex w-full flex-col items-center justify-between overflow-hidden bg-canvas font-sans",
        className
      )}
    >
      {(logoText || navLinks) && (
        <header className="z-30 flex w-full max-w-7xl items-center justify-between">
          {logoText && (
            <motion.div
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: -20 }}
              animate={reduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="text-xl font-bold tracking-wider"
            >
              {logoText}
            </motion.div>
          )}
          {navLinks && (
            <div className="hidden items-center space-x-8 md:flex">
              {navLinks.map((link) => (
                <NavLink key={link.label} href={link.href}>
                  {link.label}
                </NavLink>
              ))}
            </div>
          )}
        </header>
      )}

      {/* Main content */}
      <div className="relative grid w-full max-w-7xl flex-grow grid-cols-1 items-center gap-8 md:grid-cols-3 md:gap-4">
        {/* Left: supporting copy */}
        <motion.div
          {...rise(0.18)}
          className="z-20 order-2 text-center md:order-1 md:text-left"
        >
          <p className="mx-auto max-w-xs text-sm leading-relaxed text-ink-2 md:mx-0">
            {mainText}
          </p>
          {readMoreLink && (
            <a
              href={readMoreLink}
              className="mt-4 inline-block text-sm font-medium text-ink underline decoration-from-font underline-offset-4"
            >
              {readMoreLabel}
            </a>
          )}
        </motion.div>

        {/* Centre: disc + portrait */}
        <div className="relative order-1 flex h-full items-center justify-center md:order-2">
          <motion.div
            aria-hidden
            initial={reduceMotion ? { opacity: 0 } : { scale: 0.8, opacity: 0 }}
            animate={reduceMotion ? { opacity: 1 } : { scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.04 }}
            className={cn(
              "absolute z-0 h-[280px] w-[280px] rounded-full md:h-[380px] md:w-[380px] lg:h-[460px] lg:w-[460px]",
              discClassName
            )}
          />
          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 40 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            // Explicit box so the portrait cannot shift layout as it decodes.
            className="relative z-10 aspect-[3/4] w-56 md:w-64 lg:w-72"
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority={imagePriority}
              sizes="(min-width: 1024px) 288px, (min-width: 768px) 256px, 224px"
              className="scale-[1.35] object-contain object-bottom"
            />
          </motion.div>
        </div>

        {/* Right: the display line */}
        <motion.div
          {...rise(0.24)}
          className="z-20 order-3 flex items-center justify-center text-center md:justify-start md:text-left"
        >
          <h1 className="text-6xl font-extrabold leading-[0.95] tracking-[-0.04em] text-ink sm:text-7xl lg:text-8xl">
            {overlayText.part1}
            <br />
            {overlayText.part2}
          </h1>
        </motion.div>
      </div>

      {(socialLinks || locationText) && (
        <footer className="z-30 flex w-full max-w-7xl items-center justify-between pt-8">
          <motion.div {...rise(0.3)} className="flex items-center space-x-4">
            {socialLinks?.map((link) => (
              <SocialIcon
                key={link.label ?? link.href}
                href={link.href}
                icon={link.icon}
                label={link.label}
              />
            ))}
          </motion.div>
          <motion.div {...rise(0.34)} className="text-sm font-medium text-ink-2">
            {locationText}
          </motion.div>
        </footer>
      )}
    </div>
  );
}

export default MinimalistHero;

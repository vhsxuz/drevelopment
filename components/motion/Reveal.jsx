"use client";

import { motion, useReducedMotion } from "framer-motion";
import { spring } from "@/lib/motion";

/**
 * Entrance motion. Short, and it hints in the direction the content is
 * arriving from so the intermediate frames point at the outcome.
 *
 * Deliberately not gated behind a page-wide delay: content the user asked for
 * should not be invisible while a curtain plays.
 */
export default function Reveal({
  as = "div",
  children,
  delay = 0,
  y = 16,
  className,
  once = true,
  ...props
}) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as] ?? motion.div;

  return (
    <Component
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once, margin: "-48px" }}
      transition={
        reduceMotion
          ? { duration: 0.2, delay }
          : { ...spring.settle, delay }
      }
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
}

/** Parent that staggers its Reveal-like children on first paint. */
export function RevealGroup({
  as = "div",
  children,
  className,
  stagger = 0.055,
  delay = 0.04,
  ...props
}) {
  const Component = motion[as] ?? motion.div;

  return (
    <Component
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { delayChildren: delay, staggerChildren: stagger } },
      }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
}

/** Child of RevealGroup. */
export function RevealItem({ as = "div", children, className, y = 18, ...props }) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as] ?? motion.div;

  return (
    <Component
      variants={{
        hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y },
        show: reduceMotion
          ? { opacity: 1, transition: { duration: 0.2 } }
          : { opacity: 1, y: 0, transition: spring.settle },
      }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
}

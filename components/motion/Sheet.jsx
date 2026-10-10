"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import {
  AnimatePresence,
  animate,
  motion,
  useDragControls,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { cn } from "@/lib/utils";
import { project, spring } from "@/lib/motion";

/**
 * A sheet you can grab.
 *
 * The parts that make it feel physical rather than scripted:
 *  - the surface tracks the finger 1:1 for the whole gesture, and the scrim
 *    dims continuously as it moves, not only when the gesture completes;
 *  - dragging up past the open position meets progressive resistance instead
 *    of a hard stop (dragElastic on the top edge only);
 *  - commit is decided by the velocity SIGN, with the resting point PROJECTED
 *    from momentum - a fast flick from near the top still dismisses;
 *  - the release velocity is handed to the spring, so there is no seam where
 *    dragging ends and animating begins;
 *  - it can be grabbed again mid-flight: the drag reads the live motion value,
 *    so a closing sheet you catch follows your finger instead of finishing
 *    first and then reopening.
 *
 * Apple ships damping 0.8 / response 0.3 for drawers; that is `spring.sheet`.
 */
export default function Sheet({ open, onOpenChange, children, label, className }) {
  const y = useMotionValue(0);
  const height = useRef(1);
  const sheetRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const [dragging, setDragging] = useState(false);
  // The drag starts from the grabber only. If the whole surface listened, a
  // swipe meant for the scrollable content would drag the sheet instead.
  const dragControls = useDragControls();

  // Scrim and content fade track the drag, so the gesture always reads live.
  const progress = useTransform(y, (value) =>
    Math.min(1, Math.max(0, value / Math.max(1, height.current)))
  );
  // Driven by the drag so the dim always reflects the live gesture.
  const scrimOpacity = useTransform(progress, [0, 1], [0.45, 0]);

  useEffect(() => {
    if (open) y.set(0);
  }, [open, y]);

  const measure = useCallback(() => {
    if (sheetRef.current) height.current = sheetRef.current.offsetHeight || 1;
  }, []);

  /** Slide out at the given velocity, then unmount. */
  const dismiss = useCallback(
    (velocity = 0) => {
      measure();
      if (reduceMotion) {
        onOpenChange(false);
        return;
      }
      animate(y, height.current, {
        ...spring.sheet,
        velocity, // no seam between the finger and the animation
        onComplete: () => onOpenChange(false),
      });
    },
    [measure, onOpenChange, reduceMotion, y]
  );

  const handleDragEnd = useCallback(
    (_event, info) => {
      setDragging(false);
      measure();
      const velocity = info.velocity.y;
      const current = y.get();

      // Where momentum would actually carry it, not where the finger left off.
      const projected = current + project(velocity);
      const shouldDismiss =
        projected > height.current * 0.4 ||
        // A decisive downward flick wins regardless of distance covered.
        velocity > 650;

      if (shouldDismiss) dismiss(velocity);
      else animate(y, 0, { ...spring.sheet, velocity });
    },
    [dismiss, measure, y]
  );

  return (
    <DialogPrimitive.Root open={open} onOpenChange={(next) => !next ? dismiss(0) : onOpenChange(true)}>
      <AnimatePresence>
        {open && (
          <DialogPrimitive.Portal forceMount>
            {/* Dim to focus: a modal task earns a scrim. */}
            <DialogPrimitive.Overlay asChild forceMount>
              {/* Outer layer owns enter/exit; inner layer owns the live drag
                  dim. Separating them keeps one animation off the other's
                  property, so neither fights for `opacity`. */}
              <motion.div
                className="fixed inset-0 z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.18 } }}
                transition={spring.snappy}
              >
                <motion.div
                  className="h-full w-full bg-black"
                  style={{ opacity: scrimOpacity }}
                />
              </motion.div>
            </DialogPrimitive.Overlay>

            <DialogPrimitive.Content
              asChild
              forceMount
              aria-label={label}
              onEscapeKeyDown={(event) => {
                event.preventDefault();
                dismiss(0);
              }}
              onPointerDownOutside={(event) => {
                event.preventDefault();
                dismiss(0);
              }}
            >
              <motion.div
                ref={(node) => {
                  sheetRef.current = node;
                  if (node) height.current = node.offsetHeight || 1;
                }}
                style={{ y }}
                drag={reduceMotion ? false : "y"}
                dragListener={false}
                dragControls={dragControls}
                // Down is free - it is the dismissal direction. Up resists.
                dragConstraints={{ top: 0 }}
                dragElastic={{ top: 0.16, bottom: 0 }}
                dragMomentum={false}
                onDragStart={() => setDragging(true)}
                onDragEnd={handleDragEnd}
                // Materialize: blur and scale arrive together so it reads as a
                // real pane of glass, not an opacity fade.
                initial={
                  reduceMotion
                    ? { opacity: 0 }
                    : { y: "100%", scale: 0.98, filter: "blur(8px)", opacity: 0 }
                }
                animate={
                  reduceMotion
                    ? { opacity: 1 }
                    : { y: 0, scale: 1, filter: "blur(0px)", opacity: 1 }
                }
                exit={
                  reduceMotion
                    ? { opacity: 0, transition: { duration: 0.18 } }
                    : { opacity: 0, filter: "blur(6px)", transition: { duration: 0.18 } }
                }
                transition={spring.sheet}
                className={cn(
                  "material-thick material-edge fixed inset-x-0 bottom-0 z-50",
                  "mx-auto max-h-[88dvh] w-full max-w-[640px] overflow-hidden",
                  "rounded-t-[28px] pb-[env(safe-area-inset-bottom)]",
                  dragging && "cursor-grabbing",
                  className
                )}
              >
                {/* Grabber: the affordance and the drag surface. Generous
                    padding makes it a real target, not a 5px bar. */}
                <div
                  onPointerDown={(event) => dragControls.start(event)}
                  className="flex cursor-grab touch-none justify-center pb-2 pt-3 active:cursor-grabbing"
                >
                  <div className="h-[5px] w-9 rounded-full bg-ink/25" />
                </div>

                <DialogPrimitive.Close asChild>
                  <button
                    aria-label="Close"
                    className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-ink/8 text-ink-2 transition-colors hover:bg-ink/15"
                  >
                    <IoClose className="text-lg" />
                  </button>
                </DialogPrimitive.Close>

                <div className="max-h-[80dvh] overflow-y-auto overscroll-contain px-6 pb-8 pt-2">
                  {children}
                </div>
              </motion.div>
            </DialogPrimitive.Content>
          </DialogPrimitive.Portal>
        )}
      </AnimatePresence>
    </DialogPrimitive.Root>
  );
}

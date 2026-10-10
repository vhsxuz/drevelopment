"use client";

import { motion, useReducedMotion } from "framer-motion";
import { forwardRef, useCallback, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { spring, DRAG_THRESHOLD } from "@/lib/motion";

/**
 * Press feedback that lands on pointer-DOWN, not on click.
 *
 * Waiting for the click event to show state feels dead: the moment lag
 * appears, directness falls off a cliff. So: highlight on touch-down, commit
 * on touch-up, cancel if the finger slides off - and let it come back.
 *
 * Pointer capture keeps tracking alive once the pointer leaves the bounds,
 * which is what makes "drag away to cancel, drag back to re-arm" work.
 */
const Pressable = forwardRef(function Pressable(
  {
    as = "button",
    children,
    className,
    scale = 0.97,
    hitSlop = true,
    onPress,
    disabled,
    ...props
  },
  ref
) {
  const Component = motion[as] ?? motion.button;
  const reduceMotion = useReducedMotion();
  const [pressed, setPressed] = useState(false);
  const origin = useRef(null);

  const handlePointerDown = useCallback(
    (event) => {
      if (disabled) return;
      // Secondary buttons shouldn't paint a press state.
      if (event.button !== undefined && event.button !== 0) return;
      origin.current = { x: event.clientX, y: event.clientY };
      event.currentTarget.setPointerCapture?.(event.pointerId);
      setPressed(true);
    },
    [disabled]
  );

  const handlePointerMove = useCallback((event) => {
    if (!origin.current) return;
    const dx = event.clientX - origin.current.x;
    const dy = event.clientY - origin.current.y;
    // Hysteresis: a little movement is a press, a lot is a drag elsewhere.
    const outside = Math.hypot(dx, dy) > DRAG_THRESHOLD * 2.4;
    setPressed(!outside);
  }, []);

  const release = useCallback(() => {
    origin.current = null;
    setPressed(false);
  }, []);

  // A non-button element carrying a press handler still has to be reachable
  // and activatable from the keyboard, and has to announce itself as a button.
  const isNativeButton = as === "button";
  const needsButtonRole = !isNativeButton && typeof onPress === "function";

  const handleKeyDown = useCallback(
    (event) => {
      if (!needsButtonRole || disabled) return;
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      setPressed(true);
    },
    [disabled, needsButtonRole]
  );

  const handleKeyUp = useCallback(
    (event) => {
      if (!needsButtonRole || disabled) return;
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      setPressed(false);
      onPress?.(event);
    },
    [disabled, needsButtonRole, onPress]
  );

  return (
    <Component
      ref={ref}
      disabled={isNativeButton ? disabled : undefined}
      role={needsButtonRole ? "button" : undefined}
      tabIndex={needsButtonRole ? 0 : undefined}
      onKeyDown={needsButtonRole ? handleKeyDown : undefined}
      onKeyUp={needsButtonRole ? handleKeyUp : undefined}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={release}
      onPointerCancel={release}
      onClick={onPress}
      // Removes the ~300ms tap delay without disabling pinch-zoom.
      style={{ touchAction: "manipulation", WebkitTapHighlightColor: "transparent" }}
      animate={
        reduceMotion
          ? { opacity: pressed ? 0.62 : 1 }
          : { scale: pressed ? scale : 1, opacity: pressed ? 0.9 : 1 }
      }
      transition={spring.snappy}
      className={cn(
        "relative select-none",
        // ~10px of invisible hit padding around small targets.
        hitSlop &&
          "after:absolute after:-inset-2.5 after:content-[''] after:rounded-[inherit]",
        disabled && "opacity-40 pointer-events-none",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
});

export default Pressable;

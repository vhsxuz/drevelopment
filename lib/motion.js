/**
 * Apple's motion vocabulary, mapped onto Framer Motion.
 *
 * Apple replaced the physics triplet (mass/stiffness/damping) with two
 * designer-facing parameters:
 *
 *   damping ratio - overshoot. 1.0 = critically damped (no bounce).
 *   response      - how fast the value reaches the target, in seconds.
 *                   Not a duration: a spring has no fixed duration.
 *
 * Framer Motion's `bounce` + `duration` spring API maps closely:
 *   bounce ~= 1 - dampingRatio, duration ~= response.
 *
 * House rule: critically damped everywhere by default. Bounce is reserved
 * for motion the user's own gesture put momentum into.
 */
export const spring = {
  /** Reposition / move. Apple: damping 1.0, response 0.4 */
  move: { type: "spring", bounce: 0, duration: 0.4 },
  /** Rotation. Apple: damping 0.8, response 0.4 */
  rotate: { type: "spring", bounce: 0.2, duration: 0.4 },
  /** Drawer / sheet. Apple: damping 0.8, response 0.3 */
  sheet: { type: "spring", bounce: 0.2, duration: 0.3 },
  /** Small, frequent UI changes - tabs, indicators, hovers. */
  snappy: { type: "spring", bounce: 0, duration: 0.26 },
  /** Larger surfaces settling into place. */
  settle: { type: "spring", bounce: 0, duration: 0.55 },
  /** Released after a flick - the one place overshoot is earned. */
  flick: { type: "spring", bounce: 0.25, duration: 0.42 },
};

/** Cross-fade used in place of movement when motion is reduced. */
export const crossFade = { duration: 0.2, ease: "easeOut" };

export const DECELERATION_RATE = 0.998;

/**
 * Where a flick would come to rest. This is Apple's projection function from
 * the Designing Fluid Interfaces sample code - exponential decay, the same
 * curve scroll deceleration uses. Deliberately NOT the textbook v^2/(2a).
 *
 * @param velocity px/s at release
 */
export function project(velocity, decelerationRate = DECELERATION_RATE) {
  return ((velocity / 1000) * decelerationRate) / (1 - decelerationRate);
}

/**
 * Progressive resistance past a boundary. A hard stop reads as frozen;
 * resistance reads as "responsive, but there is nothing more here".
 */
export function rubberband(overshoot, dimension, constant = 0.55) {
  return (
    (overshoot * dimension * constant) /
    (dimension + constant * Math.abs(overshoot))
  );
}

/** Clamp with rubber-banding outside [min, max] instead of a hard stop. */
export function rubberbandClamp(value, min, max, dimension) {
  if (value < min) return min - rubberband(min - value, dimension);
  if (value > max) return max + rubberband(value - max, dimension);
  return value;
}

/** Snap point nearest a (projected) position. */
export function nearestSnapPoint(value, points) {
  return points.reduce((best, p) =>
    Math.abs(p - value) < Math.abs(best - value) ? p : best
  );
}

/**
 * Tracks a short position history so release velocity is real, not a guess
 * from the last single pointermove (which is noisy at low frame times).
 */
export function createVelocityTracker(sampleWindowMs = 100) {
  let samples = [];
  return {
    add(value) {
      const now = performance.now();
      samples.push({ value, time: now });
      samples = samples.filter((s) => now - s.time <= sampleWindowMs);
    },
    /** px/s */
    velocity() {
      if (samples.length < 2) return 0;
      const first = samples[0];
      const last = samples[samples.length - 1];
      const dt = (last.time - first.time) / 1000;
      if (dt <= 0) return 0;
      return (last.value - first.value) / dt;
    },
    reset() {
      samples = [];
    },
  };
}

/** Hysteresis before a drag commits to a direction. ~10px, per Apple. */
export const DRAG_THRESHOLD = 10;

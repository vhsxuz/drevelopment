"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import Pressable from "@/components/motion/Pressable";
import { spring } from "@/lib/motion";

const STORAGE_KEY = "theme";

/**
 * Agency: the system preference is the default, and the user can override it.
 * The theme swap is eased rather than snapped - an abrupt brightness jump is
 * exactly what the reduced-motion guidance asks us to avoid.
 */
export default function ThemeToggle({ label }) {
  const [theme, setTheme] = useState(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const system = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    setTheme(stored || system);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Private window or blocked site data - the choice just won't persist.
    }
  };

  const isDark = theme === "dark";

  return (
    <Pressable
      onPress={toggle}
      aria-label={label ?? "Toggle appearance"}
      // 44px of real target rather than 36px plus overhanging hit-slop: the
      // slop would have reached across the gap into the neighbouring control.
      hitSlop={false}
      className="flex h-11 w-11 items-center justify-center rounded-full text-ink-2 transition-colors hover:bg-ink/8 hover:text-ink"
    >
      <motion.span
        key={isDark ? "moon" : "sun"}
        initial={reduceMotion ? { opacity: 0 } : { opacity: 0, rotate: -40, scale: 0.7 }}
        animate={reduceMotion ? { opacity: 1 } : { opacity: 1, rotate: 0, scale: 1 }}
        transition={spring.rotate}
        className="text-[18px]"
      >
        {isDark ? <IoMoonOutline /> : <IoSunnyOutline />}
      </motion.span>
    </Pressable>
  );
}

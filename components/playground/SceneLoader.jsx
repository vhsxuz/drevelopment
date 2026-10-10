"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { FiPlay } from "react-icons/fi";
import Pressable from "@/components/motion/Pressable";

const Scene = dynamic(() => import("./Scene"), { ssr: false });

/**
 * The 3D scene is ~140 KB and costs more in main-thread time than in download
 * on a mid-range Android. So it never loads on its own: the poster is the LCP
 * element, and the visitor opts in.
 *
 * It also refuses to offer itself at all on a metered connection or a
 * low-memory device - there, the poster is the whole experience.
 */
export default function SceneLoader({ t }) {
  const [started, setStarted] = useState(false);
  const [capable, setCapable] = useState(true);

  useEffect(() => {
    const connection = navigator.connection;
    const lowMemory = navigator.deviceMemory && navigator.deviceMemory < 4;
    if (connection?.saveData || lowMemory) setCapable(false);
  }, []);

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-sunken sm:aspect-[16/9]">
      {started ? (
        <Scene />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 text-center">
          {/* A static gradient stands in for the mesh: cheap, and it reserves
              the exact box the canvas will occupy, so mounting shifts nothing. */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(60% 60% at 50% 45%, rgb(var(--accent) / 0.45), transparent 70%)",
            }}
          />
          <p className="t-caption relative max-w-[32ch] text-ink-2">{t.playground.poster}</p>
          {capable && (
            <Pressable
              onPress={() => setStarted(true)}
              hitSlop={false}
              className="relative flex h-12 items-center gap-2 rounded-full bg-accent px-6 font-semibold text-accent-ink"
            >
              <FiPlay /> {t.playground.enter}
            </Pressable>
          )}
        </div>
      )}
    </div>
  );
}

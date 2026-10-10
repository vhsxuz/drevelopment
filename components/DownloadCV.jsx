"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiCheck, FiDownload } from "react-icons/fi";
import { profile } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { spring } from "@/lib/motion";

/**
 * Completion feedback, in place. A download gives the browser no visible
 * acknowledgement on its own, so the button says so itself and then returns to
 * its resting state - the icon swaps along the same path it left by.
 */
export default function DownloadCV() {
  const [done, setDone] = useState(false);

  const download = () => {
    const link = document.createElement("a");
    link.href = profile.cv;
    link.download = "CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDone(true);
    setTimeout(() => setDone(false), 2000);
  };

  return (
    <Button onClick={download} size="lg" className="w-full sm:w-auto">
      <span>{done ? "Downloaded" : "Download CV"}</span>
      <span className="relative flex h-5 w-5 items-center justify-center">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={done ? "check" : "download"}
            initial={{ opacity: 0, y: done ? 6 : -6, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: done ? -6 : 6, scale: 0.8 }}
            transition={spring.snappy}
            className="absolute"
          >
            {done ? <FiCheck className="text-lg" /> : <FiDownload className="text-lg" />}
          </motion.span>
        </AnimatePresence>
      </span>
    </Button>
  );
}

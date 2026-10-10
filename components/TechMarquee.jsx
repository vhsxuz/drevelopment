"use client"

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaHtml5, FaCss3, FaReact, FaPhp, FaPython, FaNodeJs, FaSwift, FaJs, FaFigma, FaDigitalOcean, FaGitAlt } from "react-icons/fa"
import { SiTailwindcss, SiChakraui, SiNextdotjs } from "react-icons/si"

const techs = [
  {icon: <FaReact />, name: "React"},
  {icon: <SiNextdotjs />, name: "Next.JS"},
  {icon: <FaNodeJs />, name: "NodeJs"},
  {icon: <FaJs />, name: "JS"},
  {icon: <FaSwift />, name: "Swift"},
  {icon: <FaPython />, name: "Python"},
  {icon: <FaPhp />, name: "PHP"},
  {icon: <SiTailwindcss />, name: "TailwindCSS"},
  {icon: <SiChakraui />, name: "ChakraUI"},
  {icon: <FaHtml5 />, name: "HTML5"},
  {icon: <FaCss3 />, name: "CSS3"},
  {icon: <FaFigma />, name: "Figma"},
  {icon: <FaGitAlt />, name: "Git"},
  {icon: <FaDigitalOcean />, name: "Digital Ocean"},
]

const TechList = ({ hidden, className }) => {
  return (
    <ul aria-hidden={hidden} className={className}>
      {techs.map((tech, index) => {
        return (
          <li key={index} className="group flex shrink-0 items-center gap-3 rounded-full border border-white/10 bg-secondary px-5 py-2 hover:border-accent-default transition-colors duration-300">
            <span aria-hidden="true" className="text-2xl text-accent-hover group-hover:scale-125 transition-transform duration-300">{tech.icon}</span>
            <span className="whitespace-nowrap leading-none text-white/80">{tech.name}</span>
          </li>
        )
      })}
    </ul>
  )
}

const TechMarquee = () => {
  // read after mount so server and first client render match
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  return (
    <section aria-label="Technologies I work with" className="pt-4 pb-16 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <p className="mb-6 text-center xl:text-left text-sm uppercase tracking-[2px] text-white/60">
          Tech I work with
        </p>
        {reduceMotion ? (
          <TechList className="flex flex-wrap justify-center xl:justify-start gap-4" />
        ) : (
          <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            {/* two copies side by side, shifted by one copy width for a seamless loop */}
            <motion.div
              className="flex w-max"
              animate={{x: ["0%", "-50%"]}}
              transition={{duration: 30, ease: "linear", repeat: Infinity}}
            >
              <TechList className="flex gap-4 pr-4" />
              <TechList hidden className="flex gap-4 pr-4" />
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}

export default TechMarquee

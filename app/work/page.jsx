import Image from "next/image"

import { getProjects } from "@/lib/content"

export const metadata = {
  title: "Work, Andreas Alexander",
  description: "Apps, websites, and tools built by Andreas Alexander.",
}

const textLink = "underline decoration-accent-default decoration-2 underline-offset-[6px] hover:text-accent-hover transition-colors"

const Work = () => {
  const projects = getProjects("en")

  return (
    <section className="pb-16 xl:pb-24">
      <div className="container mx-auto">
        <h1 className="text-[clamp(2.5rem,8vw,5.5rem)] font-extrabold leading-[0.95] tracking-[-0.045em]">
          Things I have built
        </h1>

        <ul className="mt-12 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 xl:mt-16">
          {projects.map((project) => {
            return (
              <li key={project.slug}>
                <Image
                  src={project.image}
                  width={800}
                  height={500}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="aspect-[16/10] w-full rounded-[28px] rounded-bl-md bg-secondary object-cover object-top"
                  alt=""
                />
                <h2 className="mt-5 text-2xl font-extrabold leading-tight tracking-tight xl:text-3xl">{project.title}</h2>
                <p className="mt-1 text-accent-default first-letter:uppercase">
                  {project.category}, {project.stack.join(", ")}
                </p>
                <p className="mt-3 max-w-[34em] text-white/80">{project.description}</p>
                <p className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
                  {project.url && (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className={textLink}>Visit the live site</a>
                  )}
                  {project.github && (
                    <a href={project.github} className={textLink}>{project.title} source on GitHub</a>
                  )}
                  {!project.url && !project.github && (
                    <span className="text-white/60">Source is not public.</span>
                  )}
                </p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Work

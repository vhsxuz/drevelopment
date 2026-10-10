import Image from "next/image"
import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa"

import { WHATSAPP_URL } from "@/lib/contact"
import { services } from "@/lib/services"

const experience = [
  {
    company: "Secure Pasifik Teknologi",
    position: "System Engineer",
    duration: "Aug 2026 to current",
  },
  {
    company: "Blue Power Technology",
    position: "Software Developer, GIS",
    duration: "Oct 2024 to Jul 2026",
  },
  {
    company: "Levels Living",
    position: "Software Developer",
    duration: "Mar 2024 to May 2024",
  },
  {
    company: "Blibli",
    position: "iOS Developer",
    duration: "Feb 2023 to Feb 2024",
  },
]

const textLink = "underline decoration-accent-default decoration-2 underline-offset-[6px] hover:text-accent-hover transition-colors"
const said = "max-w-[34em] text-xl font-medium leading-snug xl:text-2xl xl:leading-snug"
const links = "mt-6 flex flex-wrap gap-x-8 gap-y-3"

// The page reads as a chat: the visitor's side sits right in a yellow bubble,
// Andreas answers on the left in plain text. Each question is the section heading.
const Exchange = ({ id, question, children }) => {
  return (
    <section aria-labelledby={id} className="py-10 xl:py-14">
      <h2
        id={id}
        className="ml-auto w-fit max-w-[18em] rounded-[28px] rounded-br-md bg-accent-default px-6 py-4 text-xl font-bold leading-tight tracking-tight text-primary xl:text-2xl"
      >
        {question}
      </h2>
      <div className="mt-8 xl:mt-10">{children}</div>
    </section>
  )
}

export const ServicesBand = () => {
  return (
    <section aria-labelledby="can-build" className="bg-secondary py-14 xl:py-20">
      <div className="container mx-auto">
        <h2 id="can-build" className="text-3xl font-extrabold leading-none tracking-[-0.03em] xl:text-5xl">
          What I can build for you
        </h2>
        <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            return (
              <li key={service.slug}>
                <h3 className="text-xl font-bold leading-tight tracking-tight text-accent-default xl:text-2xl">{service.title}</h3>
                <p className="mt-2 text-white/80">{service.summary}</p>
              </li>
            )
          })}
        </ul>
        <p className="mt-10">
          <Link href="/services" className={textLink}>See each service in detail</Link>
        </p>
      </div>
    </section>
  )
}

export const Thread = () => {
  return (
    <div className="container mx-auto">
      <p className={`${said} pt-14 xl:pt-20`}>
        Not ready to write yet? Here are the questions I would ask in your place.
      </p>

      <Exchange id="ask-iphone" question="Do you build for iPhone?">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end">
          <Image
            src="/assets/work/blibli-mockup.png"
            width={1145}
            height={1374}
            sizes="(min-width: 640px) 400px, 100vw"
            className="h-auto w-full shrink-0 rounded-[28px] rounded-bl-md sm:w-[320px] xl:w-[400px]"
            alt="Blibli category screen on an iPhone"
          />
          <div>
            <p className={said}>
              Yes. I spent a year as an iOS developer at Blibli. Blibli Widgets is my replica of the app&apos;s widgets feature, written in Swift with UIKit.
            </p>
            <p className={links}>
              <a href="https://github.com/vhsxuz/blibli-widgets" className={textLink}>Blibli Widgets source on GitHub</a>
            </p>
          </div>
        </div>
      </Exchange>

      <Exchange id="ask-web" question="And websites, with the server behind them?">
        <p className={said}>
          Both ends: the screens people use, and the services, APIs, and database behind them.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
          <figure>
            <Image
              src="/assets/work/quanc-ui.png"
              width={2000}
              height={1086}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="aspect-[16/9] w-full rounded-[28px] rounded-bl-md object-cover object-top"
              alt="Quan C home page: a vulnerable code sample beside a lock diagram showing which attack payloads got in"
            />
            <figcaption className="mt-4">
              <p className="text-lg font-medium leading-snug">
                Quan C, an open source platform for practising secure coding. You submit a fix for a vulnerable app and a runner tests it automatically. Built with two teammates in React and TypeScript, with Express and FastAPI behind it.
              </p>
              <p className="mt-3">
                <a href="https://github.com/ProjectQuanC/quan-c-app" className={textLink}>Quan C source on GitHub</a>
              </p>
            </figcaption>
          </figure>
          <figure>
            <Image
              src="/assets/work/php.png"
              width={3840}
              height={2160}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="aspect-[16/9] w-full rounded-[28px] rounded-bl-md object-cover"
              alt="Mai Boutique online store open on a laptop and a phone"
            />
            <figcaption className="mt-4">
              <p className="text-lg font-medium leading-snug">
                Mai Boutique, an online clothes store with its own stock management. Built on Laravel.
              </p>
              <p className="mt-3">
                <a href="https://github.com/vhsxuz/maiboutique" className={textLink}>Mai Boutique source on GitHub</a>
              </p>
            </figcaption>
          </figure>
        </div>
      </Exchange>

      <Exchange id="ask-else" question="What else can you take on?">
        <p className={said}>
          DevOps engineering: CI/CD pipelines and cloud servers, so a release ships without manual steps. Data work: research, scraping, and analysis that turn raw data into answers. And research and development: I try out new technology for you and write up what I find.
        </p>
        <p className={links}>
          <Link href="/services" className={textLink}>See all services</Link>
        </p>
      </Exchange>

      <Exchange id="ask-worked" question="Where have you worked?">
        <ol className="max-w-[46rem]">
          {experience.map((item) => {
            return (
              <li key={item.company} className="flex flex-col gap-x-8 py-3 sm:flex-row sm:items-baseline sm:justify-between">
                <span className="text-xl font-medium leading-snug xl:text-2xl">{item.position}, {item.company}</span>
                <span className="shrink-0 text-white/70">{item.duration}</span>
              </li>
            )
          })}
        </ol>
        <p className={links}>
          <Link href="/resume" className={textLink}>Read full resume</Link>
          <a href="/documents/CV.pdf" download="CV.pdf" className={textLink}>Download CV (PDF)</a>
        </p>
      </Exchange>

    </div>
  )
}

export const ClosingBand = () => {
  return (
    <section className="mt-10 bg-accent-default py-16 text-primary xl:mt-14 xl:py-24">
      <div className="container mx-auto flex flex-col gap-8 xl:flex-row xl:items-end xl:justify-between">
        <h2 className="max-w-[12em] text-4xl font-extrabold leading-none tracking-[-0.04em] xl:text-7xl">
          That is the short version. Your turn.
        </h2>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-16 w-fit shrink-0 items-center gap-3 rounded-full bg-primary px-8 text-xl font-bold text-white transition-colors hover:bg-secondary focus-visible:outline-primary"
        >
          <FaWhatsapp aria-hidden="true" className="text-2xl" />
          Chat on WhatsApp
        </a>
      </div>
    </section>
  )
}

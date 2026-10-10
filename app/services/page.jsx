import Image from "next/image"
import { FaWhatsapp } from "react-icons/fa"

import { services, askAbout, servicePhrase } from "@/lib/services"
import { WHATSAPP_URL } from "@/lib/contact"

export const metadata = {
  title: "Services, Andreas Alexander",
  description: "Mobile apps, websites and web apps, DevOps engineering, data tools, and research by Andreas Alexander, a software developer in Jakarta.",
}

const Services = () => {
  return (
    <>
      <section className="pb-16 xl:pb-24">
        <div className="container mx-auto">
          <h1 className="max-w-[12em] text-[clamp(2.5rem,8vw,5.5rem)] font-extrabold leading-[0.95] tracking-[-0.045em]">
            What I can build for you
          </h1>
          <p className="mt-6 max-w-[34em] text-xl font-medium leading-snug xl:text-2xl xl:leading-snug">
            Six kinds of work. If yours is not on the list, describe the problem anyway and I will tell you whether I can help.
          </p>

          <ul className="mt-14 flex flex-col gap-16 xl:mt-20 xl:gap-24">
            {services.map((service) => {
              return (
                <li key={service.slug} id={service.slug} className="grid grid-cols-1 gap-x-8 gap-y-6 xl:grid-cols-12 xl:items-start">
                  <div className="xl:col-span-5">
                    <h2 className="text-3xl font-extrabold leading-none tracking-[-0.03em] text-accent-default xl:text-5xl">
                      {service.title}
                    </h2>
                    <p className="mt-5 max-w-[34em] text-lg leading-relaxed">{service.detail}</p>
                    <a
                      href={askAbout(service)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 flex h-12 w-fit items-center gap-2 rounded-full border border-accent-default px-5 font-semibold text-accent-hover transition-colors hover:bg-accent-default hover:text-primary"
                    >
                      <FaWhatsapp aria-hidden="true" className="text-lg" />
                      Ask about {servicePhrase(service)}
                    </a>
                  </div>
                  {service.image && (
                    <figure className="xl:col-span-7">
                      <Image
                        src={service.image}
                        width={service.width}
                        height={service.height}
                        sizes="(min-width: 1200px) 670px, 100vw"
                        className="h-auto w-full rounded-[28px] rounded-bl-md"
                        alt={service.imageAlt}
                      />
                      {service.imageNote && (
                        <figcaption className="mt-3 text-white/70">{service.imageNote}</figcaption>
                      )}
                    </figure>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section className="bg-accent-default py-16 text-primary xl:py-24">
        <div className="container mx-auto flex flex-col gap-8 xl:flex-row xl:items-end xl:justify-between">
          <h2 className="max-w-[12em] text-4xl font-extrabold leading-none tracking-[-0.04em] xl:text-7xl">
            Tell me what is slowing you down.
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
    </>
  )
}

export default Services

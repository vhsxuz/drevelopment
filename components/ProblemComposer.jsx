"use client"

import { useRef, useState } from "react"
import { FaWhatsapp } from "react-icons/fa"

import { WHATSAPP_URL } from "@/lib/contact"

const starters = [
  "We still track sales on paper.",
  "I need an app on iPhone and Android.",
  "Our reports take a whole day to pull together.",
  "My website is slow and hard to update.",
]

const ProblemComposer = () => {
  const [problem, setProblem] = useState("")
  const field = useRef(null)

  const message = problem.trim() ? `Hi Andreas, ${problem.trim()}` : "Hi Andreas,"
  const href = `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`

  const fillStarter = (starter) => {
    setProblem(starter)
    field.current?.focus()
  }

  return (
    <div>
      {/* one squared corner, like an outgoing chat bubble */}
      <div className="rounded-[28px] rounded-br-md bg-accent-default p-5 text-primary sm:p-7">
        <textarea
          ref={field}
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
          rows={3}
          aria-label="What is slowing you down?"
          placeholder="Describe the problem in a sentence or two"
          className="block w-full resize-none bg-transparent text-xl font-medium leading-snug placeholder:text-primary/60 focus:outline-none sm:text-2xl"
        />
        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between xl:flex-col xl:items-stretch 2xl:flex-row">
          <p className="text-sm sm:max-w-[34ch] xl:max-w-none leading-snug text-primary/80">
            Opens WhatsApp with your message ready. Nothing is sent until you press send there.
          </p>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-7 font-semibold text-white transition-colors hover:bg-secondary focus-visible:outline-primary"
          >
            <FaWhatsapp aria-hidden="true" className="text-xl" />
            Send on WhatsApp
          </a>
        </div>
      </div>

      <p className="mt-5 text-right text-white/70">Or start from one of these.</p>
      <ul className="mt-3 flex flex-wrap justify-end gap-2">
        {starters.map((starter) => {
          return (
            <li key={starter}>
              <button
                type="button"
                onClick={() => fillStarter(starter)}
                className="rounded-full border border-white/25 px-4 py-2 text-left text-sm leading-snug transition-colors hover:border-accent-default hover:text-accent-hover"
              >
                {starter}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ProblemComposer

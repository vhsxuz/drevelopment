"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { waLink } from "@/lib/i18n";
import Pressable from "@/components/motion/Pressable";

/**
 * Composes a WhatsApp message instead of sending mail. No API route, no
 * credentials, no spam queue - and the conversation lands somewhere that
 * actually gets read.
 */
export default function WhatsAppForm({ t }) {
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [message, setMessage] = useState("");

  const composed = [
    name ? `Halo Andreas, saya ${name}.` : "Halo Andreas,",
    about ? `Soal: ${about}` : null,
    message,
  ]
    .filter(Boolean)
    .join("\n");

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="card mt-10 flex flex-col gap-5 p-7 sm:p-9"
    >
      <label className="flex flex-col gap-1.5">
        <span className="t-caption font-medium text-ink-2">{t.contact.nameLabel}</span>
        <Input value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="t-caption font-medium text-ink-2">{t.contact.aboutLabel}</span>
        <Input value={about} onChange={(e) => setAbout(e.target.value)} />
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="t-caption font-medium text-ink-2">{t.contact.messageLabel}</span>
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={t.contact.messagePlaceholder}
          className="min-h-[140px]"
        />
      </label>

      <Pressable as="div" hitSlop={false} scale={0.97} className="rounded-full">
        <a
          href={waLink(composed)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-[52px] items-center justify-center gap-2 rounded-full bg-accent px-7 text-[17px] font-semibold text-accent-ink"
        >
          <FaWhatsapp className="text-xl" />
          {t.contact.submit}
        </a>
      </Pressable>

      <p className="t-caption text-ink-3">{t.contact.hint}</p>
    </form>
  );
}

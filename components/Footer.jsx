import { WHATSAPP_URL } from "@/lib/contact"

const link = "underline decoration-white/30 underline-offset-4 hover:text-accent-hover hover:decoration-accent-default transition-colors"

const Footer = () => {
  return (
    <footer className="border-t border-white/15 py-10 text-white/80">
      <div className="container mx-auto flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <p className="max-w-[24em]">
          <span className="font-bold text-white">Andreas Alexander</span>
          <br />
          Software developer in Jakarta, Indonesia.
        </p>
        <ul className="flex flex-col gap-1">
          <li><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={link}>WhatsApp +62 878 7819 7989</a></li>
          <li><a href="mailto:drealexander.dev@gmail.com" className={link}>drealexander.dev@gmail.com</a></li>
        </ul>
        <ul className="flex flex-col gap-1">
          <li><a href="https://github.com/vhsxuz" className={link}>GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/vincentius-andreas-alexander/" className={link}>LinkedIn</a></li>
          <li><a href="/documents/CV.pdf" download="CV.pdf" className={link}>Download CV (PDF)</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer

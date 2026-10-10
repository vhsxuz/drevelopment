"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { WHATSAPP_URL } from "@/lib/contact";

const links = [
  {name: "home", path: "/"},
  {name: "services", path: "/services"},
  {name: "resume", path: "/resume"},
  {name: "work", path: "/work"},
  // {name: "contact", path: WHATSAPP_URL, external: true},
]

const Nav = () => {

  const pathname = usePathname();
  
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link href={link.path} key={index} target={link.external ? "_blank" : undefined} rel={link.external ? "noopener noreferrer" : undefined} className={`${link.path === pathname && "text-accent-default border-b-2 border-accent-default"} capitalize font-medium hover: text-accent-default transition-all`}>
            {link.name}
          </Link>
        );
      })}
    </nav>
  )
}

export default Nav
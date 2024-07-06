"use client"

import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";

const links = [
  {name: "home", path: "/"},
  {name: "services", path: "/services"},
  {name: "resume", path: "/resume"},
  {name: "work", path: "/work"},
  {name: "contact", path: "/contact"},
]


const MobileNav = () => {

  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuBurger className="text-accent-default text-[32px]"/>
      </SheetTrigger>
      <SheetContent>
        <div className="mt-32 mb-40 text-center text-2xl">
          <nav className="flex flex-col justify-center items-center gap-8">
            {links.map((link, index) => {
              return (
                <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent-default border-b-2 border-accent-default"} text-xl capitalize hover:text-accent-default transition-all`}>
                {link.name}
                </Link>
              );
            })}
          </nav>
        </div>

      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
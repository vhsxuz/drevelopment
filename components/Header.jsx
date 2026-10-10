import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import { WHATSAPP_URL } from "@/lib/contact";

const Header = () => {
  return (
    <header className="py-8 mb-24 xl:mb-12 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">

      {/* Icon */}
        <Link href="/">
        <span className="text-xl font-extrabold tracking-tight">
          Andreas Alexander
        </span>
        </Link>

        {/* Navigations */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          <Button>
            Chat on WhatsApp
          </Button>
          </a>
        </div>

        {/* Mobile Navigations */}
        <div className="xl:hidden">
           <MobileNav />
        </div>

      </div>
    </header>
  )
}

export default Header
import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 mb-24 xl:mb-12 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">

      {/* Icon */}
        <Link href="/">
        <h1 className="text-4xl font-semibold">
          Andreas <span className="text-accent-default">.</span>
        </h1>
        </Link>

        {/* Navigations */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
          <Button>
            Hire Me
          </Button>
          </Link>
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
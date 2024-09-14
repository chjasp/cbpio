import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-6 xl:py-8 absolute top-0 left-0 right-0 z-10">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-white">
            CBP
          </Link>
          {/* Navigation */}
          <div className="hidden xl:flex">
            <Nav />
          </div>
          {/* Mobile Navigation */}
          <div className="xl:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

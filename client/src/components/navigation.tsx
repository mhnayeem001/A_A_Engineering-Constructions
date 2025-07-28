import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50 border-b border-gray-200 font-[Poppins]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <img
              src="https://raw.githubusercontent.com/mhnayeem001/Picture/main/broiconn.jpg"
              alt="A.A. Engineering Logo"
              className="h-10 w-10 rounded-full object-cover shadow-md"
            />
            <div>
              <div className="text-2xl font-extrabold text-[hsl(var(--navy))] leading-none">
                A.A. Engineering
              </div>
              <div className="text-xs text-[hsl(var(--concrete))] leading-tight tracking-wide">
                & Constructions
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {navItems.slice(0, -1).map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-[hsl(var(--concrete))] hover:text-[hsl(var(--navy))] text-sm font-medium tracking-wide transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("#contact")}
                className="bg-black text-white hover:bg-gray-900 transition-all px-6 py-2 rounded-full shadow-md"
              >
                Contact
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-[hsl(var(--navy))]" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-5 mt-10">
                  {navItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => scrollToSection(item.href)}
                      className="text-left text-lg font-semibold text-[hsl(var(--concrete))] hover:text-[hsl(var(--navy))] transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
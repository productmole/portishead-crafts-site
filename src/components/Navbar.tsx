import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/richmond-carpentry-light.svg";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/95 backdrop-blur-md shadow-sm border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <a href="#" className="inline-flex items-center">
          <img src={logo} alt="Richmond Carpentry" className="max-h-12 w-auto" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-[#B8995A] px-8 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
          >
            Get a free quote
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 transition-colors text-foreground"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 bg-background border-t border-border ${open ? "max-h-80" : "max-h-0 border-transparent"}`}>
        <div className="px-4 pb-6 pt-2">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-base font-medium text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 block w-full text-center rounded-full bg-[#B8995A] px-8 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
          >
            Get a free quote
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

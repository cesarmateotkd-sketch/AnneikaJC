"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Showreel", href: "#showreel" },
  { label: "Coaching", href: "#coaching" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0c0c0c]/95 backdrop-blur-md border-b border-[rgba(240,235,224,0.08)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        <a
          href="#hero"
          className="font-[family-name:var(--font-cormorant)] text-2xl font-light tracking-[0.2em] uppercase text-[#f0ebe0]"
        >
          Anneika JC
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-[family-name:var(--font-jost)] text-[10px] tracking-[0.3em] uppercase text-[#8a8478] hover:text-[#c4622d] transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-px bg-[#f0ebe0] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-px bg-[#f0ebe0] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-[#f0ebe0] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0c0c0c] border-t border-[rgba(240,235,224,0.08)] px-6 py-6 flex flex-col gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="font-[family-name:var(--font-jost)] text-xs tracking-[0.3em] uppercase text-[#8a8478] hover:text-[#c4622d] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/our-story" },
  { label: "Expertise", href: "/expertise" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-[#0d1116]/90 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[92px] w-full max-w-[1440px] items-center justify-between px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Levell Up Builders home"
          className="relative z-10 shrink-0"
        >
          <Image
            src="/images/Logo.png"
            alt="Levell Up Builders"
            width={72}
            height={72}
            priority
            className="h-[64px] w-[64px] object-contain sm:h-[70px] sm:w-[70px]"
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-8 xl:gap-12">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative text-[12px] font-medium uppercase tracking-[0.28em] text-white/90 transition-colors duration-300 hover:text-[#C58C67] xl:text-[13px]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile button */}
        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-10 flex h-11 w-11 items-center justify-center border border-white/20 lg:hidden"
        >
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-px w-full bg-white transition ${
                menuOpen ? "translate-y-[4px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-full bg-white transition ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-px w-full bg-white transition ${
                menuOpen ? "-translate-y-[4px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-[#0d1116]/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          menuOpen ? "max-h-[420px]" : "max-h-0"
        }`}
      >
        <nav className="mx-auto w-full max-w-[1440px] px-6 py-6 sm:px-8">
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.href} className="border-b border-white/10 last:border-0">
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-5 text-sm uppercase tracking-[0.25em] text-white/85 transition-colors hover:text-[#C58C67]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
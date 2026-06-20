"use client";

import { useState } from "react";
import { SITE, buildWhatsAppLink } from "@/lib/constants";

const NAV_LINKS = [
  { href: "#hero", label: "Início" },
  { href: "#fazendas", label: "Fazendas" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#regiao", label: "Região" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#1F3D2B]/10 bg-[#F5F1E8]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#hero" className="font-display text-lg font-semibold tracking-tight text-[#1F3D2B]">
          {SITE.name}
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#1F3D2B]/80 transition hover:text-[#1F3D2B]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-[#1F3D2B] px-6 py-2.5 text-sm font-semibold text-white transition hover:scale-105 lg:inline-block"
        >
          Falar no WhatsApp
        </a>

        <button
          type="button"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1F3D2B]/20 lg:hidden"
        >
          <span className="sr-only">Abrir menu</span>
          <div className="flex flex-col gap-1.5">
            <span className={`h-0.5 w-5 bg-[#1F3D2B] transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-5 bg-[#1F3D2B] transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 bg-[#1F3D2B] transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-[#1F3D2B]/10 bg-[#F5F1E8] px-6 py-4 lg:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-sm font-medium text-[#1F3D2B] transition hover:bg-[#1F3D2B]/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-[#1F3D2B] px-6 py-3 text-center text-sm font-semibold text-white"
          >
            Falar no WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}

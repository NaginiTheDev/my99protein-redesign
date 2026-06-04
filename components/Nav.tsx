"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/about", label: "About" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-emerald-900/10 bg-[#fbfaf6]/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <Link href="/" className="flex items-center gap-2 text-lg font-black tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-600 text-sm font-black text-white">99</span>
          <span>my<span className="text-emerald-600">99</span>protein</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  active ? "bg-emerald-600/10 text-emerald-700" : "text-emerald-950/70 hover:text-emerald-700"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/menu"
            className="hidden rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-emerald-700 sm:block"
          >
            Get started
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-900/10 md:hidden"
          >
            <span className="text-xl">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-emerald-900/10 bg-[#fbfaf6] px-5 py-3 md:hidden">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-emerald-950/80"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

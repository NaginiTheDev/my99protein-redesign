import Link from "next/link";
import { CITIES } from "@/lib/data";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-emerald-900/10 bg-emerald-950 text-emerald-50/90">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 text-lg font-black">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500 text-sm font-black text-emerald-950">99</span>
            my99protein
          </div>
          <p className="mt-3 max-w-xs text-sm text-emerald-50/60">
            Fully cooked, hand-prepared high-protein meals delivered fresh across the Kansas City metro.
          </p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">Explore</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/menu" className="hover:text-white">This week&apos;s menu</Link></li>
            <li><Link href="/how-it-works" className="hover:text-white">How it works</Link></li>
            <li><Link href="/about" className="hover:text-white">About us</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">We deliver to</p>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-emerald-50/70">
            {CITIES.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">Get started</p>
          <p className="mt-3 text-sm text-emerald-50/60">Your first week is just $99. No long-term commitment.</p>
          <Link href="/menu" className="mt-4 inline-block rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-bold text-emerald-950 transition hover:bg-emerald-400">
            Order this week →
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-emerald-50/40">
        © {new Date().getFullYear()} my99protein · Kansas City, MO · Demo redesign
      </div>
    </footer>
  );
}

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { MEALS, CITIES } from "@/lib/data";

export const metadata = { title: "About — my99protein" };

const STATS = [
  { v: "250k+", l: "meals delivered" },
  { v: "6", l: "metro cities" },
  { v: "40g+", l: "protein per plate" },
  { v: "4.9★", l: "avg. rating" },
];

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-emerald-900/10">
        <div className="blob absolute -right-24 -top-32 h-96 w-96 bg-emerald-200/50" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-600">Our story</p>
            <h1 className="mt-2 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              Built in Kansas City, for people who don&apos;t have time to meal-prep.
            </h1>
            <p className="mt-5 text-lg text-emerald-950/70">
              my99protein started with a simple idea: eating well shouldn&apos;t mean spending your Sunday
              cooking and your weeknights cleaning. So we built a kitchen that does it for you — real
              ingredients, big protein, restaurant-level flavor, delivered to your door.
            </p>
            <p className="mt-4 text-emerald-950/70">
              Every meal is hand-prepared fresh, macro-balanced, and priced so that eating right is the
              easy choice — starting at just $99 for your first week.
            </p>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-[2.5rem] border-4 border-white shadow-2xl">
              <img src={MEALS[0].img} alt="A my99protein meal" className="aspect-[4/3] w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-emerald-950 py-14 text-white">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-5 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.l} className="text-center">
              <p className="text-4xl font-black text-emerald-400">{s.v}</p>
              <p className="mt-1 text-sm text-emerald-50/60">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: "🌱", t: "Real ingredients", b: "No mystery fillers. Whole foods, lean proteins, and produce you can pronounce." },
            { icon: "👩‍🍳", t: "Cooked by hand", b: "Prepared fresh in our KC kitchen every week — never a frozen tray in sight." },
            { icon: "💪", t: "Macros that matter", b: "Every plate is built around protein, so hitting your goals takes zero math." },
          ].map((v) => (
            <div key={v.t} className="rounded-3xl border border-emerald-900/10 bg-white p-7">
              <div className="text-3xl">{v.icon}</div>
              <h3 className="mt-3 text-lg font-extrabold">{v.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-emerald-950/65">{v.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20">
        <div className="rounded-[2.5rem] bg-emerald-600 px-8 py-14 text-center text-white sm:px-16">
          <h2 className="text-4xl font-black tracking-tight">Proudly feeding the metro</h2>
          <p className="mx-auto mt-4 max-w-2xl text-emerald-50/85">{CITIES.join(" · ")}</p>
          <Link href="/menu" className="mt-7 inline-block rounded-full bg-white px-8 py-3.5 text-sm font-black text-emerald-700 transition hover:bg-emerald-50">
            See this week&apos;s menu →
          </Link>
        </div>
      </section>
    </>
  );
}

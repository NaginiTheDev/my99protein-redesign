import Link from "next/link";
import { STEPS, PLANS } from "@/lib/data";

export const metadata = { title: "How it works — my99protein" };

const FAQ = [
  { q: "Do I have to cook anything?", a: "Nope. Every meal arrives fully cooked. Heat it for about 90 seconds and eat — no prep, no dishes." },
  { q: "How fresh are the meals?", a: "Hand-prepared in our Kansas City kitchen and delivered fresh — never frozen. They keep in the fridge all week." },
  { q: "Can I do keto or paleo?", a: "Yes. We label every meal with its macros and tags. Filter the menu for keto, paleo, gluten-free and high-protein options each week." },
  { q: "Is it a locked-in subscription?", a: "No long-term contract. Skip, pause or cancel any week before the cutoff — no questions asked." },
  { q: "Where do you deliver?", a: "Across the Kansas City metro: KC, Overland Park, Lenexa, Lee's Summit, Olathe, Shawnee and surrounding areas." },
];

export default function HowItWorks() {
  return (
    <>
      <section className="border-b border-emerald-900/10 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-14 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-emerald-600">How it works</p>
          <h1 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">Three steps to your best week.</h1>
          <p className="mx-auto mt-3 max-w-lg text-emerald-950/65">
            We handle the planning, cooking and delivery. You handle showing up hungry.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="mx-auto max-w-5xl px-5 py-16">
        <div className="space-y-6">
          {STEPS.map((s) => (
            <div key={s.n} className="flex items-start gap-5 rounded-3xl border border-emerald-900/10 bg-white p-6 sm:p-8">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-2xl font-black text-white">{s.n}</div>
              <div>
                <h3 className="text-xl font-extrabold">{s.title}</h3>
                <p className="mt-1.5 text-emerald-950/65">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Plans recap */}
      <section className="bg-emerald-950/[0.03] py-16">
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="text-center text-3xl font-black tracking-tight">Simple weekly pricing</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PLANS.map((p) => (
              <div key={p.name} className={`rounded-2xl border p-5 ${p.featured ? "border-emerald-600 bg-white ring-2 ring-emerald-600" : "border-emerald-900/10 bg-white"}`}>
                <h3 className="text-sm font-extrabold">{p.name}</h3>
                <p className="mt-3 text-3xl font-black text-emerald-700">${p.price % 1 === 0 ? p.price : p.price.toFixed(2)}</p>
                <p className="mt-1 text-xs font-semibold text-emerald-950/50">{p.meals} meals / week</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-5 py-16">
        <h2 className="text-center text-3xl font-black tracking-tight">Good questions</h2>
        <div className="mt-8 divide-y divide-emerald-900/10 rounded-3xl border border-emerald-900/10 bg-white">
          {FAQ.map((f) => (
            <details key={f.q} className="group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between text-base font-bold">
                {f.q}
                <span className="text-emerald-600 transition group-open:rotate-45">＋</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-emerald-950/65">{f.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/menu" className="inline-block rounded-full bg-emerald-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700">
            Start for $99/week →
          </Link>
        </div>
      </section>
    </>
  );
}

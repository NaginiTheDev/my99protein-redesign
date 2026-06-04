/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { MEALS, STEPS, PLANS, TESTIMONIALS, CITIES } from "@/lib/data";
import { MealCard } from "@/components/MealCard";

export default function Home() {
  const featured = MEALS.slice(0, 8);
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="blob absolute -right-32 -top-40 h-[34rem] w-[34rem] bg-emerald-200/50" />
        <div className="blob absolute -bottom-48 -left-40 h-[30rem] w-[30rem] bg-amber-200/40" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 lg:grid-cols-2 lg:py-24">
          <div className="float-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-600/10 px-3.5 py-1.5 text-xs font-bold text-emerald-700">
              🚚 Now delivering across the Kansas City metro
            </span>
            <h1 className="mt-5 text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl">
              Real food.
              <br />
              <span className="text-emerald-600">High protein.</span>
              <br />
              Zero prep.
            </h1>
            <p className="mt-5 max-w-md text-lg text-emerald-950/70">
              Chef-cooked, hand-prepared meals delivered fresh to your door — ready to heat and eat in
              90 seconds. Keto, paleo &amp; high-protein options every week.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link href="/menu" className="rounded-full bg-emerald-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700">
                Start for $99/week →
              </Link>
              <Link href="/how-it-works" className="rounded-full border border-emerald-900/15 px-6 py-3.5 text-sm font-bold text-emerald-900 transition hover:bg-emerald-900/5">
                How it works
              </Link>
            </div>
            <div className="mt-7 flex items-center gap-5 text-sm font-semibold text-emerald-950/60">
              <span className="flex items-center gap-1.5"><span className="text-amber-500">★★★★★</span> 4.9 / 5</span>
              <span>·</span>
              <span>Never frozen</span>
              <span>·</span>
              <span>Cancel anytime</span>
            </div>
          </div>

          <div className="float-up relative" style={{ animationDelay: "120ms" }}>
            <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-[2.5rem] border-4 border-white bg-white shadow-2xl">
              <img src={MEALS[2].img} alt={MEALS[2].name} className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-5 -left-4 rotate-[-6deg] rounded-2xl bg-white p-3 shadow-xl">
              <p className="text-xs font-bold text-emerald-950/50">This week</p>
              <p className="text-sm font-black">{MEALS[2].name}</p>
              <p className="text-xs font-bold text-emerald-600">{MEALS[2].protein}g protein · ${MEALS[2].price}</p>
            </div>
            <div className="absolute -right-3 top-6 rotate-[5deg] rounded-2xl bg-emerald-600 px-4 py-3 text-white shadow-xl">
              <p className="text-2xl font-black leading-none">$99</p>
              <p className="text-[11px] font-semibold opacity-80">first week</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-emerald-900/10 bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-5 py-5 text-sm font-bold text-emerald-950/60">
          <span>👩‍🍳 Hand-prepared daily</span>
          <span>🥦 Fresh, never frozen</span>
          <span>💪 Macros on every meal</span>
          <span>📍 KC-made &amp; KC-delivered</span>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-emerald-600">How it works</p>
          <h2 className="mt-2 text-4xl font-black tracking-tight">Healthy eating, handled.</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.n} className="rounded-3xl border border-emerald-900/10 bg-white p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-xl font-black text-white">{s.n}</div>
              <h3 className="mt-4 text-xl font-extrabold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-emerald-950/65">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured menu */}
      <section className="bg-emerald-950/[0.03] py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-emerald-600">On the menu</p>
              <h2 className="mt-2 text-4xl font-black tracking-tight">This week&apos;s favorites</h2>
            </div>
            <Link href="/menu" className="rounded-full border border-emerald-900/15 px-5 py-2.5 text-sm font-bold text-emerald-900 transition hover:bg-white">
              See the full menu →
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-5 lg:grid-cols-4">
            {featured.map((m, i) => <MealCard key={m.name} meal={m} index={i} />)}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-emerald-600">Plans</p>
          <h2 className="mt-2 text-4xl font-black tracking-tight">Pick your week</h2>
          <p className="mx-auto mt-3 max-w-md text-emerald-950/60">No subscriptions you can&apos;t escape. Skip, pause or cancel any week.</p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((p) => (
            <div key={p.name} className={`relative rounded-3xl border p-6 ${p.featured ? "border-emerald-600 bg-emerald-600 text-white shadow-xl shadow-emerald-600/20" : "border-emerald-900/10 bg-white"}`}>
              {p.featured && <span className="absolute -top-3 left-6 rounded-full bg-amber-400 px-3 py-1 text-[11px] font-black text-emerald-950">MOST POPULAR</span>}
              <h3 className="text-lg font-extrabold">{p.name}</h3>
              <p className={`mt-1 text-sm ${p.featured ? "text-emerald-50/80" : "text-emerald-950/60"}`}>{p.meals} meals / week</p>
              <p className="mt-4 text-4xl font-black">${p.price % 1 === 0 ? p.price : p.price.toFixed(2)}</p>
              <p className={`mt-3 text-sm leading-relaxed ${p.featured ? "text-emerald-50/85" : "text-emerald-950/65"}`}>{p.blurb}</p>
              <Link href="/menu" className={`mt-6 block rounded-full py-2.5 text-center text-sm font-bold transition ${p.featured ? "bg-white text-emerald-700 hover:bg-emerald-50" : "bg-emerald-600 text-white hover:bg-emerald-700"}`}>
                Choose plan
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-emerald-950 py-20 text-white">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-center text-4xl font-black tracking-tight">Kansas City&apos;s eating better</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="rounded-3xl bg-white/5 p-7 ring-1 ring-white/10">
                <p className="text-amber-400">★★★★★</p>
                <p className="mt-3 text-[15px] leading-relaxed text-emerald-50/90">“{t.quote}”</p>
                <p className="mt-4 text-sm font-bold">{t.name}</p>
                <p className="text-xs text-emerald-50/50">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-emerald-600 px-8 py-14 text-center text-white sm:px-16">
          <div className="blob absolute -right-20 -top-24 h-72 w-72 bg-white/10" />
          <h2 className="relative text-4xl font-black tracking-tight sm:text-5xl">Your first week is $99.</h2>
          <p className="relative mx-auto mt-3 max-w-md text-emerald-50/85">
            Skip the grocery store, skip the meal-prep Sunday. Eat better starting this week.
          </p>
          <Link href="/menu" className="relative mt-7 inline-block rounded-full bg-white px-8 py-3.5 text-sm font-black text-emerald-700 shadow-lg transition hover:bg-emerald-50">
            Build my box →
          </Link>
          <p className="relative mt-5 text-xs font-semibold text-emerald-50/60">
            Delivering to {CITIES.slice(0, 4).join(", ")} &amp; more.
          </p>
        </div>
      </section>
    </>
  );
}

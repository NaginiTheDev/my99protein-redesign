/* eslint-disable @next/next/no-img-element */
import type { Meal } from "@/lib/data";

const TAG_STYLES: Record<string, string> = {
  "High Protein": "bg-emerald-600 text-white",
  Keto: "bg-amber-500 text-white",
  Paleo: "bg-orange-500 text-white",
  Comfort: "bg-rose-500 text-white",
};

export function MealCard({ meal, index = 0 }: { meal: Meal; index?: number }) {
  return (
    <div
      style={{ animationDelay: `${(index % 8) * 60}ms` }}
      className="float-up group overflow-hidden rounded-3xl border border-emerald-900/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-emerald-50">
        <img src={meal.img} alt={meal.name} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          {meal.tags.map((t) => (
            <span key={t} className={`rounded-full px-2.5 py-1 text-[10px] font-black uppercase tracking-wide ${TAG_STYLES[t] ?? "bg-emerald-600 text-white"}`}>
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-base font-extrabold leading-snug">{meal.name}</h3>
        <div className="mt-2 flex items-center gap-3 text-xs font-semibold text-emerald-950/55">
          <span>{meal.protein}g protein</span>
          <span className="h-1 w-1 rounded-full bg-emerald-950/20" />
          <span>{meal.calories} cal</span>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-black text-emerald-700">${meal.price.toFixed(2)}</span>
          <button className="rounded-full bg-emerald-600/10 px-3.5 py-1.5 text-xs font-bold text-emerald-700 transition group-hover:bg-emerald-600 group-hover:text-white">
            Add +
          </button>
        </div>
      </div>
    </div>
  );
}

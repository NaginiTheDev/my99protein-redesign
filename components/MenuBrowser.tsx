"use client";

import { useMemo, useState } from "react";
import { MEALS } from "@/lib/data";
import { MealCard } from "./MealCard";

const FILTERS = ["All", "Lunch & Dinner", "Breakfast", "High Protein", "Keto", "Paleo"] as const;

export function MenuBrowser() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");

  const meals = useMemo(() => {
    if (filter === "All") return MEALS;
    if (filter === "Lunch & Dinner" || filter === "Breakfast") return MEALS.filter((m) => m.category === filter);
    return MEALS.filter((m) => m.tags.includes(filter));
  }, [filter]);

  return (
    <section className="mx-auto max-w-6xl px-5 py-12">
      <div className="sticky top-[68px] z-30 -mx-5 mb-8 flex gap-2 overflow-x-auto bg-[#fbfaf6]/90 px-5 py-3 backdrop-blur">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-bold transition ${
              filter === f ? "bg-emerald-600 text-white" : "bg-white text-emerald-950/70 ring-1 ring-emerald-900/10 hover:ring-emerald-600/40"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
        {meals.map((m, i) => <MealCard key={m.name} meal={m} index={i} />)}
      </div>

      <p className="mt-8 text-center text-sm text-emerald-950/50">
        Showing {meals.length} meals · new dishes added every week
      </p>
    </section>
  );
}

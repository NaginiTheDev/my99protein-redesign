import { MenuBrowser } from "@/components/MenuBrowser";

export const metadata = { title: "This week's menu — my99protein" };

export default function MenuPage() {
  return (
    <>
      <section className="border-b border-emerald-900/10 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-14 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-emerald-600">This week&apos;s menu</p>
          <h1 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">Pick what looks good.</h1>
          <p className="mx-auto mt-3 max-w-lg text-emerald-950/65">
            A rotating lineup of chef-cooked, macro-balanced meals. Filter by what fits your week — then we
            do the cooking, delivery and dishes.
          </p>
        </div>
      </section>
      <MenuBrowser />
    </>
  );
}

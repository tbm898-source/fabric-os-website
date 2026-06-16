import { FACT_SHEET } from "@/data/pressKitData";

export default function PressFactSheet() {
  return (
    <section
      id="fact-sheet"
      className="border-b border-[#1E1E22] py-24 lg:py-32"
      aria-labelledby="fact-sheet-heading"
    >
      <div className="max-w-[120rem] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-3">
            <h2
              id="fact-sheet-heading"
              className="text-xs font-semibold tracking-[0.2em] uppercase text-[#38BDF8]"
            >
              Fact Sheet
            </h2>
          </div>

          <div className="lg:col-span-9">
            <dl className="border border-[#1E1E22] rounded-sm overflow-hidden divide-y divide-[#1E1E22]">
              {FACT_SHEET.map((row) => {
                const isPlaceholder = row.value.startsWith("[");
                return (
                  <div
                    key={row.label}
                    className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 px-8 py-5 bg-[#0D0D0F] hover:bg-[#0F0F11] transition-colors duration-200"
                  >
                    <dt className="text-xs font-semibold text-[#EDEDED] tracking-[0.1em] uppercase shrink-0 sm:w-52">
                      {row.label}
                    </dt>
                    <dd className={`text-sm leading-[1.6] ${isPlaceholder ? "text-[#3A3A42] italic" : "text-[#88888C]"}`}>
                      {row.value}
                    </dd>
                  </div>
                );
              })}
            </dl>
            <p className="mt-4 text-xs text-[#2E2E36] italic">
              Items in brackets are not yet confirmed. Placeholders will be updated as decisions are made.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
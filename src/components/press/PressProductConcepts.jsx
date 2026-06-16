import { PRODUCT_CONCEPTS, STATUS_LABELS } from "@/data/pressKitData";

const STATUS_STYLES = {
  available:     "bg-[#38BDF8]/10 text-[#38BDF8] border-[#38BDF8]/20",
  prototype:     "bg-[#A78BFA]/10 text-[#A78BFA] border-[#A78BFA]/20",
  in_development:"bg-[#FACC15]/10 text-[#FACC15] border-[#FACC15]/20",
  planned:       "bg-[#141416] text-[#4A4A52] border-[#2A2A2F]",
  conceptual:    "bg-[#141416] text-[#3A3A42] border-[#222226]",
};

export default function PressProductConcepts() {
  return (
    <section
      id="product-concepts"
      className="border-b border-[#1E1E22] py-24 lg:py-32"
      aria-labelledby="concepts-heading"
    >
      <div className="max-w-[120rem] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-3">
            <h2
              id="concepts-heading"
              className="text-xs font-semibold tracking-[0.2em] uppercase text-[#38BDF8] mb-4"
            >
              Key Product Concepts
            </h2>
            <p className="text-xs text-[#4A4A52] leading-[1.6]">
              Each concept is labeled with its current development status.
              Do not imply that planned or conceptual features already exist.
            </p>
            {/* Legend */}
            <div className="mt-6 space-y-2">
              {Object.entries(STATUS_LABELS).map(([k, v]) => (
                <div key={k} className="flex items-center gap-2">
                  <span className={`inline-flex px-2 py-0.5 rounded-sm text-[10px] font-medium border ${STATUS_STYLES[k]}`}>
                    {v}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-9">
            <div className="grid sm:grid-cols-2 gap-px bg-[#1E1E22] border border-[#1E1E22] rounded-sm overflow-hidden">
              {PRODUCT_CONCEPTS.map((c) => (
                <div
                  key={c.id}
                  className="bg-[#0A0A0B] p-8 group hover:bg-[#0E0E10] transition-colors duration-300"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-sm font-semibold text-[#EDEDED] tracking-wide group-hover:text-white transition-colors duration-200">
                      {c.title}
                    </h3>
                    <span
                      className={`shrink-0 inline-flex px-2 py-0.5 rounded-sm text-[10px] font-medium border ${STATUS_STYLES[c.status]}`}
                      aria-label={`Status: ${STATUS_LABELS[c.status]}`}
                    >
                      {STATUS_LABELS[c.status]}
                    </span>
                  </div>
                  <p className="text-sm text-[#88888C] leading-[1.6]">
                    {c.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
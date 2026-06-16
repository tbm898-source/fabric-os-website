import { DESIGN_PHILOSOPHY } from "@/data/siteData";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function PhilosophySection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="philosophy"
      className="border-b border-[#1E1E22] py-24 lg:py-32"
      aria-labelledby="philosophy-heading"
    >
      <div className="max-w-[120rem] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Label column */}
          <div className="lg:col-span-3">
            <h2
              id="philosophy-heading"
              className="text-xs font-semibold tracking-[0.2em] uppercase text-[#38BDF8]"
            >
              Design Philosophy
            </h2>
          </div>

          {/* Content column */}
          <div
            ref={ref}
            className={`
              lg:col-span-9
              transition-all duration-700
              motion-reduce:transition-none
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
            style={{ transitionTimingFunction: "cubic-bezier(0.2,0.8,0.2,1)" }}
          >
            {/* Summary */}
            <p className="text-[clamp(1.1rem,2vw,1.5rem)] text-[#EDEDED] leading-[1.5] font-light max-w-3xl mb-16">
              {DESIGN_PHILOSOPHY.summary}
            </p>

            {/* Principles grid */}
            <dl className="grid sm:grid-cols-2 gap-px bg-[#1E1E22] border border-[#1E1E22] rounded-sm overflow-hidden">
              {DESIGN_PHILOSOPHY.principles.map((p) => (
                <div
                  key={p.id}
                  className="bg-[#0A0A0B] p-8 group hover:bg-[#0E0E10] transition-colors duration-300"
                  style={{ transitionTimingFunction: "cubic-bezier(0.2,0.8,0.2,1)" }}
                >
                  <dt className="text-sm font-semibold text-[#EDEDED] tracking-wide mb-3 group-hover:text-white transition-colors duration-200">
                    {p.title}
                  </dt>
                  <dd className="text-sm text-[#88888C] leading-[1.6]">
                    {p.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
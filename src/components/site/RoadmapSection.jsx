import { ROADMAP } from "@/data/siteData";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const STATUS_CONFIG = {
  complete: {
    label: "Complete",
    dot: "bg-[#38BDF8]",
    line: "bg-[#38BDF8]",
    badge: "bg-[#38BDF8]/10 text-[#38BDF8] border-[#38BDF8]/20",
  },
  active: {
    label: "In Progress",
    dot: "bg-[#38BDF8] animate-pulse",
    line: "bg-[#38BDF8]",
    badge: "bg-[#38BDF8]/10 text-[#38BDF8] border-[#38BDF8]/20",
  },
  next: {
    label: "Up Next",
    dot: "bg-[#FACC15]",
    line: "bg-[#1E1E22]",
    badge: "bg-[#FACC15]/10 text-[#FACC15] border-[#FACC15]/20",
  },
  planned: {
    label: "Planned",
    dot: "bg-[#2A2A2F]",
    line: "bg-[#1E1E22]",
    badge: "bg-[#141416] text-[#4A4A52] border-[#2A2A2F]",
  },
};

export default function RoadmapSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="roadmap"
      className="border-b border-[#1E1E22] py-24 lg:py-32"
      aria-labelledby="roadmap-heading"
    >
      <div className="max-w-[120rem] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Label column */}
          <div className="lg:col-span-3">
            <h2
              id="roadmap-heading"
              className="text-xs font-semibold tracking-[0.2em] uppercase text-[#38BDF8] mb-4"
            >
              Roadmap
            </h2>
            <p className="text-xs text-[#4A4A52] leading-[1.6]">
              Milestones reflect current direction. No release dates are
              committed. Priorities may shift as development progresses.
            </p>
          </div>

          {/* Timeline column */}
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
            <ol className="relative" aria-label="Development roadmap timeline">
              {ROADMAP.map((milestone, index) => {
                const isLast = index === ROADMAP.length - 1;
                const cfg = STATUS_CONFIG[milestone.status];

                return (
                  <li key={milestone.id} className="relative flex gap-6 sm:gap-10">
                    {/* Timeline spine */}
                    <div className="flex flex-col items-center" aria-hidden="true">
                      {/* Dot */}
                      <div
                        className={`w-3 h-3 rounded-full shrink-0 mt-1 ring-2 ring-[#0A0A0B] ${cfg.dot}`}
                      />
                      {/* Vertical line */}
                      {!isLast && (
                        <div className={`w-px grow mt-2 mb-0 ${cfg.line} opacity-40`} />
                      )}
                    </div>

                    {/* Content */}
                    <div className={`pb-12 ${isLast ? "pb-0" : ""} flex-1 min-w-0`}>
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="text-xs text-[#4A4A52] font-mono tracking-wide">
                          {milestone.phase}
                        </span>
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-sm text-xs font-medium border ${cfg.badge}`}
                        >
                          {cfg.label}
                        </span>
                      </div>

                      <h3 className="text-base font-semibold text-[#EDEDED] tracking-wide mb-2">
                        {milestone.title}
                      </h3>

                      <p className="text-sm text-[#88888C] leading-[1.6] mb-5 max-w-2xl">
                        {milestone.description}
                      </p>

                      <ul className="space-y-2" aria-label={`${milestone.title} work items`}>
                        {milestone.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-xs text-[#4A4A52]"
                          >
                            <span
                              className="mt-1.5 w-1 h-1 rounded-full bg-[#2A2A2F] shrink-0"
                              aria-hidden="true"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
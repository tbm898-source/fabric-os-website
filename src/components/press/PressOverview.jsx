import { useState } from "react";
import { OVERVIEW_SHORT, OVERVIEW_LONG } from "@/data/pressKitData";

export default function PressOverview() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="project-overview"
      className="border-b border-[#1E1E22] py-24 lg:py-32"
      aria-labelledby="overview-heading"
    >
      <div className="max-w-[120rem] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-3">
            <h2
              id="overview-heading"
              className="text-xs font-semibold tracking-[0.2em] uppercase text-[#38BDF8]"
            >
              Project Overview
            </h2>
          </div>

          <div className="lg:col-span-9">
            {/* Short overview */}
            <p className="text-[clamp(1rem,1.8vw,1.35rem)] text-[#EDEDED] leading-[1.6] font-light max-w-3xl mb-8">
              {OVERVIEW_SHORT}
            </p>

            {/* Toggle for long overview */}
            <button
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              className="
                inline-flex items-center gap-2
                text-xs text-[#38BDF8] tracking-wide font-medium
                hover:text-white transition-colors duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B]
                mb-6
              "
            >
              <span>{expanded ? "Collapse extended overview" : "Read extended overview"}</span>
              <svg
                width="12" height="12" viewBox="0 0 12 12" fill="none"
                aria-hidden="true"
                className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
              >
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {expanded && (
              <div className="border-l-2 border-[#2A2A2F] pl-6 space-y-4">
                {OVERVIEW_LONG.split("\n\n").map((para, i) => (
                  <p key={i} className="text-sm text-[#88888C] leading-[1.7]">
                    {para}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
import { useState } from "react";
import { FOUNDER } from "@/data/pressKitData";

export default function PressFounder() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="founder"
      className="border-b border-[#1E1E22] py-24 lg:py-32"
      aria-labelledby="founder-heading"
    >
      <div className="max-w-[120rem] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-3">
            <h2
              id="founder-heading"
              className="text-xs font-semibold tracking-[0.2em] uppercase text-[#38BDF8]"
            >
              Founder
            </h2>
          </div>

          <div className="lg:col-span-9">
            {/* Founder card */}
            <div className="bg-[#0D0D0F] border border-[#1E1E22] rounded-sm p-8 mb-8">
              <div className="flex items-start gap-6">
                {/* Avatar placeholder */}
                <div
                  className="w-16 h-16 rounded-sm bg-[#141416] border border-[#2A2A2F] flex items-center justify-center shrink-0"
                  aria-label="Founder headshot placeholder"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="8" r="4" stroke="#3A3A42" strokeWidth="1.5"/>
                    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#3A3A42" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#EDEDED] tracking-wide mb-1">
                    {FOUNDER.name}
                  </h3>
                  <p className="text-xs text-[#4A4A52] tracking-wide mb-4">{FOUNDER.role}</p>
                  <p className="text-sm text-[#88888C] leading-[1.7]">
                    {FOUNDER.shortBio}
                  </p>
                </div>
              </div>
            </div>

            {/* Long bio toggle */}
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
              <span>{expanded ? "Collapse full bio" : "Read full bio"}</span>
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
                {FOUNDER.longBio.split("\n\n").map((para, i) => (
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
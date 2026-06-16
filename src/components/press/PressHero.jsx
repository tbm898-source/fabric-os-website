import { PRESS_META, MEDIA_CONTACT } from "@/data/pressKitData";
import { downloadPressKit } from "@/lib/pressKitDownload";

export default function PressHero() {
  return (
    <section
      id="press-overview"
      className="relative border-b border-[#1E1E22] py-24 lg:py-36"
      aria-labelledby="press-hero-heading"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(#1E1E22 1px, transparent 1px), linear-gradient(90deg, #1E1E22 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          opacity: 0.25,
        }}
      />

      <div className="relative max-w-[120rem] mx-auto px-6 lg:px-10">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2.5 border border-[#2A2A2F] px-3 py-1.5 rounded-sm">
            <span className="text-xs text-[#38BDF8] tracking-[0.15em] uppercase font-semibold">
              Fabric OS
            </span>
            <span className="text-xs text-[#4A4A52]">Press Kit</span>
          </div>
        </div>

        {/* Heading */}
        <h1
          id="press-hero-heading"
          className="text-[clamp(2rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[#EDEDED] max-w-4xl mb-6"
        >
          Press and Media Resources
        </h1>

        {/* Tagline */}
        <p className="text-lg text-[#38BDF8] leading-[1.5] max-w-3xl mb-4 font-light">
          {PRESS_META.tagline}
        </p>

        <p className="text-sm text-[#88888C] leading-[1.6] max-w-2xl mb-12">
          Fabric OS is under active development. This press kit presents the project's
          design intent, architectural commitments, and current development status
          accurately and without exaggeration. All product claims are labeled with
          their current status.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={downloadPressKit}
            className="
              inline-flex items-center gap-2 px-5 py-2.5
              bg-[#EDEDED] text-[#0A0A0B]
              text-sm font-semibold tracking-wide rounded-sm
              hover:bg-white transition-colors duration-200
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B]
            "
          >
            <DownloadIcon />
            Download Press Kit
          </button>
          <a
            href="#brand-assets"
            className="
              inline-flex items-center gap-2 px-5 py-2.5
              border border-[#2A2A2F] text-[#88888C]
              text-sm font-medium tracking-wide rounded-sm
              hover:border-[#38BDF8] hover:text-[#EDEDED] transition-colors duration-200
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B]
            "
          >
            View Brand Assets
          </a>
          <a
            href="#project-overview"
            className="
              inline-flex items-center gap-2 px-5 py-2.5
              border border-[#2A2A2F] text-[#88888C]
              text-sm font-medium tracking-wide rounded-sm
              hover:border-[#38BDF8] hover:text-[#EDEDED] transition-colors duration-200
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B]
            "
          >
            Read Project Overview
          </a>
          <a
            href="#media-contact"
            className="
              inline-flex items-center gap-2 px-5 py-2.5
              border border-[#2A2A2F] text-[#88888C]
              text-sm font-medium tracking-wide rounded-sm
              hover:border-[#38BDF8] hover:text-[#EDEDED] transition-colors duration-200
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B]
            "
          >
            Contact
          </a>
        </div>

        {/* Version note */}
        <p className="mt-8 text-xs text-[#2E2E36] font-mono">
          Press Kit v{PRESS_META.version} — {PRESS_META.lastUpdated}
        </p>
      </div>
    </section>
  );
}

function DownloadIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M7 1v8M4 6l3 3 3-3M2 11h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
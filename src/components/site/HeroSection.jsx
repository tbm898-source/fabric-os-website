import { useEffect, useRef, useState } from "react";
import { PRODUCT_LINKS } from "@/data/siteData";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="overview"
      ref={ref}
      className="relative flex flex-col justify-end pt-14 border-b border-[#1E1E22]"
      aria-labelledby="hero-headline"
    >
      {/* Background grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(#1E1E22 1px, transparent 1px), linear-gradient(90deg, #1E1E22 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          opacity: 0.35,
        }}
      />

      <div className="relative max-w-[120rem] mx-auto px-6 lg:px-10 w-full pb-0">
        {/* Interface Preview — upper portion */}
        <div
          className={`
            w-full mt-6 mb-8
            transition-all duration-700
            motion-reduce:transition-none
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
          style={{ transitionTimingFunction: "cubic-bezier(0.2,0.8,0.2,1)" }}
        >
          <InterfacePreview />
        </div>

        {/* Hero text block — bottom-left anchored */}
        <div
          className={`
            max-w-4xl pb-12
            transition-all duration-700 delay-150
            motion-reduce:transition-none
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
          style={{ transitionTimingFunction: "cubic-bezier(0.2,0.8,0.2,1)" }}
        >
          {/* Eyebrow / Brand label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2.5 border border-[#2A2A2F] px-3 py-1.5 rounded-sm">
              {/* Pulsing status dot */}
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38BDF8] opacity-50" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#38BDF8]" />
              </span>
              <span className="text-xs text-[#88888C] tracking-[0.12em] uppercase font-medium">
                Fabric OS
              </span>
              <span className="text-xs text-[#4A4A52] tracking-wide">
                Development Phase 1
              </span>
            </div>
          </div>

          {/* H1 — the single page-level heading */}
          <h1
            id="hero-headline"
            className="text-[clamp(2.5rem,7vw,7rem)] font-bold leading-[1.0] tracking-[-0.04em] text-[#EDEDED] mb-8"
          >
            One interface for the systems that make a space work.
          </h1>

          <p className="text-lg text-[#88888C] leading-[1.6] max-w-2xl mb-10">
            Fabric OS is a cross-platform application under active development,
            planned for Windows, macOS, Android, and iPhone and iPad. This site
            is its future official information and download hub.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href={PRODUCT_LINKS.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2 px-6 py-3
                bg-[#38BDF8] text-[#0A0A0B]
                text-sm font-semibold tracking-wide
                hover:bg-[#5cc8fa] transition-colors duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B]
                rounded-sm
              "
              style={{ transitionTimingFunction: "cubic-bezier(0.2,0.8,0.2,1)" }}
            >
              Try the Prototype
            </a>
            <button
              onClick={() => handleScroll("#download")}
              className="
                inline-flex items-center gap-2 px-6 py-3
                bg-[#EDEDED] text-[#0A0A0B]
                text-sm font-semibold tracking-wide
                hover:bg-white transition-colors duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B]
                rounded-sm
              "
              style={{ transitionTimingFunction: "cubic-bezier(0.2,0.8,0.2,1)" }}
            >
              Platform Status
            </button>
            <button
              onClick={() => handleScroll("#project")}
              className="
                inline-flex items-center gap-2 px-6 py-3
                border border-[#2A2A2F] text-[#88888C]
                text-sm font-medium tracking-wide
                hover:border-[#38BDF8] hover:text-[#EDEDED] transition-colors duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B]
                rounded-sm
              "
              style={{ transitionTimingFunction: "cubic-bezier(0.2,0.8,0.2,1)" }}
            >
              Learn About the Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function InterfacePreview() {
  return (
    <div
      className="relative w-full border border-[#2A2A2F] rounded-sm overflow-hidden shadow-[0_0_0_1px_rgba(56,189,248,0.08),0_24px_80px_rgba(0,0,0,0.45)]"
      style={{
        minHeight: 'clamp(420px, 56vw, 760px)',
        background: 'radial-gradient(ellipse at top, #111820 0%, #0D0D0F 55%, #0A0A0B 100%)',
      }}
      role="img"
      aria-label="Fabric OS web prototype — PipBoy home dashboard with room status, alerts, and quick actions"
    >
      {/* Corner marks */}
      {[
        "top-0 left-0 border-t border-l",
        "top-0 right-0 border-t border-r",
        "bottom-0 left-0 border-b border-l",
        "bottom-0 right-0 border-b border-r",
      ].map((cls, i) => (
        <div
          key={i}
          className={`absolute w-5 h-5 border-[#38BDF8]/70 z-10 ${cls}`}
          aria-hidden="true"
        />
      ))}

      <div className="absolute inset-0 flex items-center justify-center p-2 sm:p-3 md:p-4">
        <picture className="block w-full h-full max-w-[1440px]">
          <source
            media="(min-resolution: 2dppx)"
            srcSet="/hero/fabric-home-overview-retro@2x.png"
          />
          <img
            src="/hero/fabric-home-overview-retro.png"
            alt="Fabric OS web prototype showing the cyan PipBoy home dashboard with room status and system alerts"
            className="w-full h-full object-contain object-center"
            style={{
              maxHeight: 'clamp(400px, 54vw, 720px)',
              imageRendering: 'auto',
            }}
            loading="eager"
            decoding="async"
          />
        </picture>
      </div>

      {/* Subtle edge vignette — keeps UI readable on the site chrome */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(180deg, rgba(10,10,11,0.35) 0%, transparent 12%, transparent 88%, rgba(10,10,11,0.5) 100%)',
        }}
      />
    </div>
  );
}
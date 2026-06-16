import { useEffect, useRef, useState } from "react";

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
      className="relative w-full border border-[#2A2A2F] rounded-sm overflow-hidden"
      style={{ aspectRatio: "16/9", background: "#0D0D0F" }}
      role="img"
      aria-label="Interface preview placeholder — will be replaced with application screenshots"
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
          className={`absolute w-5 h-5 border-[#38BDF8]/60 ${cls}`}
          aria-hidden="true"
        />
      ))}

      {/* Wireframe skeleton */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 675"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Desktop frame - sidebar */}
        <rect x="40" y="40" width="200" height="595" rx="2" stroke="#2A2A2F" strokeWidth="1"/>
        {/* Sidebar items */}
        {[0,1,2,3,4,5,6,7].map(i => (
          <rect key={i} x="60" y={70 + i * 56} width="160" height="36" rx="2" stroke="#242428" strokeWidth="1"/>
        ))}
        {/* Sidebar accent line */}
        <rect x="60" y="70" width="4" height="36" rx="1" fill="#38BDF8" opacity="0.5"/>

        {/* Main content area */}
        <rect x="268" y="40" width="640" height="595" rx="2" stroke="#2A2A2F" strokeWidth="1"/>
        {/* Top bar in main */}
        <rect x="268" y="40" width="640" height="48" rx="2" stroke="#2A2A2F" strokeWidth="1" fill="#111113"/>
        {/* Content cards */}
        {[0,1].map(col =>
          [0,1,2].map(row => (
            <rect
              key={`${col}-${row}`}
              x={288 + col * 314}
              y={108 + row * 164}
              width={294}
              height={148}
              rx="2"
              stroke="#222226"
              strokeWidth="1"
            />
          ))
        )}
        {/* Card accent lines */}
        <line x1="288" y1="108" x2="430" y2="108" stroke="#38BDF8" strokeWidth="1" opacity="0.3"/>
        <line x1="602" y1="108" x2="744" y2="108" stroke="#38BDF8" strokeWidth="1" opacity="0.3"/>

        {/* Right panel */}
        <rect x="936" y="40" width="224" height="595" rx="2" stroke="#2A2A2F" strokeWidth="1"/>
        {[0,1,2,3,4].map(i => (
          <rect key={i} x="956" y={60 + i * 96} width="184" height="76" rx="2" stroke="#242428" strokeWidth="1"/>
        ))}

        {/* Mobile frame */}
        <rect x="680" y="480" width="160" height="144" rx="8" stroke="#38BDF8" strokeWidth="1" opacity="0.4"/>
        <rect x="690" y="492" width="140" height="120" rx="2" stroke="#2A2A2F" strokeWidth="1"/>
        {[0,1,2].map(i => (
          <rect key={i} x="698" y={502 + i * 32} width="124" height="20" rx="1" stroke="#242428" strokeWidth="1"/>
        ))}

        {/* Grid lines — subtle horizontal */}
        {[1,2,3,4,5,6,7].map(i => (
          <line key={i} x1="40" y1={40 + i * 74} x2="1160" y2={40 + i * 74} stroke="#161618" strokeWidth="1"/>
        ))}

        {/* Label */}
        <text x="600" y="648" textAnchor="middle" fill="#3A3A42" fontSize="11" fontFamily="monospace" letterSpacing="2">
          INTERFACE PREVIEW — PLACEHOLDER
        </text>
      </svg>
    </div>
  );
}
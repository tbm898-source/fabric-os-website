import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const NAV_GROUPS = [
  {
    label: "Product",
    items: [
      { label: "Overview", href: "#overview" },
      { label: "Features", href: "#features" },
      { label: "Platforms", href: "#platforms" },
      { label: "Roadmap", href: "#roadmap" },
    ],
  },
  {
    label: "Philosophy",
    items: [
      { label: "Design Philosophy", href: "#philosophy" },
      { label: "Privacy", href: "#privacy" },
      { label: "Accessibility", href: "#accessibility" },
      { label: "Project", href: "#project" },
    ],
  },
  {
    label: "More",
    items: [
      { label: "Download", href: "#download" },
      { label: "Stay Informed", href: "#notify" },
      { label: "Press Kit", href: "/press", external: true },
    ],
  },
];

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openGroup, setOpenGroup] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    if (!openGroup) return;
    const close = (e) => {
      if (!e.target.closest("[data-nav-group]")) setOpenGroup(null);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [openGroup]);

  const handleNavClick = (href, external) => {
    setMobileOpen(false);
    setOpenGroup(null);
    if (external) {
      window.location.href = href;
      return;
    }
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0B]/97 backdrop-blur-sm border-b border-[#1E1E22]"
          : "bg-[#0A0A0B]/80 backdrop-blur-sm border-b border-[#1E1E22]"
      }`}
      role="banner"
    >
      <div className="max-w-[120rem] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-14">
          {/* Wordmark */}
          <a
            href="/"
            className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B] rounded-sm"
            aria-label="Fabric OS — home"
          >
            <svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <rect x="0.5" y="0.5" width="27" height="27" rx="3.5" stroke="#38BDF8" strokeWidth="1"/>
              <line x1="9" y1="7" x2="9" y2="21" stroke="#38BDF8" strokeWidth="1.5"/>
              <line x1="9" y1="7" x2="19" y2="7" stroke="#38BDF8" strokeWidth="1.5"/>
              <line x1="9" y1="14" x2="17" y2="14" stroke="#38BDF8" strokeWidth="1.5"/>
            </svg>
            <span className="text-[#EDEDED] font-semibold tracking-[0.08em] text-sm uppercase select-none">
              Fabric OS
            </span>
          </a>

          {/* Desktop Nav — grouped dropdowns */}
          <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-1">
            {NAV_GROUPS.map((group) => (
              <div key={group.label} className="relative" data-nav-group>
                <button
                  onClick={() => setOpenGroup(openGroup === group.label ? null : group.label)}
                  aria-expanded={openGroup === group.label}
                  className="flex items-center gap-1.5 px-3.5 py-2 text-sm text-[#88888C] hover:text-[#EDEDED] transition-colors duration-200 tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-1 focus-visible:ring-offset-[#0A0A0B] rounded-sm"
                >
                  {group.label}
                  <ChevronDown
                    size={13}
                    className={`transition-transform duration-200 ${openGroup === group.label ? "rotate-180" : ""}`}
                  />
                </button>

                {openGroup === group.label && (
                  <div className="absolute top-full left-0 mt-1.5 w-52 bg-[#0D0D0F] border border-[#2A2A2F] rounded-sm shadow-xl shadow-black/60 overflow-hidden">
                    {group.items.map((item) => (
                      <button
                        key={item.href}
                        onClick={() => handleNavClick(item.href, item.external)}
                        className="w-full text-left px-4 py-3 text-sm text-[#88888C] hover:text-[#EDEDED] hover:bg-[#141416] transition-colors duration-150 tracking-wide flex items-center justify-between group"
                      >
                        {item.label}
                        {item.external && (
                          <span className="text-[10px] text-[#38BDF8] tracking-[0.1em] uppercase opacity-70 group-hover:opacity-100">
                            ↗
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-[#88888C] hover:text-[#EDEDED] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] rounded-sm"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div id="mobile-nav" className="md:hidden bg-[#0A0A0B] border-t border-[#1E1E22]">
          <nav className="max-w-[120rem] mx-auto px-6 py-4 space-y-4">
            {NAV_GROUPS.map((group) => (
              <div key={group.label}>
                <p className="text-[10px] text-[#38BDF8] tracking-[0.2em] uppercase font-semibold mb-2 px-3">
                  {group.label}
                </p>
                {group.items.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href, item.external)}
                    className="w-full text-left px-3 py-2.5 text-sm text-[#88888C] hover:text-[#EDEDED] hover:bg-[#141416] transition-colors duration-150 tracking-wide rounded-sm"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Why Fabric", href: "#why-fabric" },
  { label: "How it helps", href: "#features" },
  { label: "Status", href: "#roadmap" },
  { label: "Follow the build", href: "#notify" },
];

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
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

          {/* Desktop navigation */}
          <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="px-3.5 py-2 text-sm text-[#88888C] hover:text-[#EDEDED] transition-colors duration-200 tracking-wide rounded-sm"
              >
                {item.label}
              </button>
            ))}
            <a href="/press" className="ml-2 px-4 py-2 text-sm border border-[#2A2A2F] text-[#EDEDED] hover:border-[#38BDF8] transition-colors rounded-sm">
              Press
            </a>
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
            {NAV_ITEMS.map((item) => (
              <button key={item.href} onClick={() => handleNavClick(item.href)} className="w-full text-left px-3 py-2.5 text-sm text-[#88888C] hover:text-[#EDEDED] hover:bg-[#141416] rounded-sm">
                {item.label}
              </button>
            ))}
            <a href="/press" className="block px-3 py-2.5 text-sm text-[#EDEDED]">Press kit ↗</a>
          </nav>
        </div>
      )}
    </header>
  );
}

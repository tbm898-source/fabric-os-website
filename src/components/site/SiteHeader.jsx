import { useState, useEffect } from "react";
import { NAV_ITEMS } from "@/data/siteData";
import { Menu, X } from "lucide-react";

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
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0B]/95 backdrop-blur-sm border-b border-[#1E1E22]"
          : "bg-transparent"
      }`}
      role="banner"
    >
      <div className="max-w-[120rem] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 border-b border-[#1E1E22]">
          {/* Wordmark */}
          <div className="flex items-center gap-3" aria-label="Fabric OS">
            {/* SVG Logo Mark */}
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect x="0.5" y="0.5" width="27" height="27" rx="3.5" stroke="#38BDF8" strokeWidth="1"/>
              <line x1="9" y1="7" x2="9" y2="21" stroke="#38BDF8" strokeWidth="1.5"/>
              <line x1="9" y1="7" x2="19" y2="7" stroke="#38BDF8" strokeWidth="1.5"/>
              <line x1="9" y1="14" x2="17" y2="14" stroke="#38BDF8" strokeWidth="1.5"/>
            </svg>
            <span
              className="text-[#EDEDED] font-semibold tracking-[0.1em] text-[1.1rem] uppercase select-none"
              aria-hidden="true"
            >
              Fabric OS
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-1"
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="px-4 py-2 text-sm text-[#88888C] hover:text-[#EDEDED] transition-colors duration-200 tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B] rounded-sm"
              >
                {item.label}
              </button>
            ))}
            <a
              href="/press"
              className="px-4 py-2 text-sm text-[#38BDF8] hover:text-white border border-[#38BDF8]/20 hover:border-[#38BDF8]/50 transition-colors duration-200 tracking-wide rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B]"
            >
              Press
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-[#88888C] hover:text-[#EDEDED] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B] rounded-sm"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {mobileOpen && (
        <div
          id="mobile-nav"
          className="md:hidden bg-[#0A0A0B] border-b border-[#1E1E22]"
          role="dialog"
          aria-label="Navigation menu"
        >
          <nav className="max-w-[120rem] mx-auto px-6 py-4 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-left px-3 py-3 text-sm text-[#88888C] hover:text-[#EDEDED] hover:bg-[#141416] transition-colors duration-200 tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] rounded-sm"
              >
                {item.label}
              </button>
            ))}
            <a
              href="/press"
              className="text-left px-3 py-3 text-sm text-[#38BDF8] hover:bg-[#141416] transition-colors duration-200 tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] rounded-sm"
            >
              Press
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
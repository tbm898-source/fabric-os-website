import { FOOTER_LINKS } from "@/data/siteData";

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 lg:py-20" role="contentinfo">
      <div className="max-w-[120rem] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <svg
                width="22"
                height="22"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <rect x="0.5" y="0.5" width="27" height="27" rx="3.5" stroke="#38BDF8" strokeWidth="1" opacity="0.5"/>
                <line x1="9" y1="7" x2="9" y2="21" stroke="#38BDF8" strokeWidth="1.5" opacity="0.5"/>
                <line x1="9" y1="7" x2="19" y2="7" stroke="#38BDF8" strokeWidth="1.5" opacity="0.5"/>
                <line x1="9" y1="14" x2="17" y2="14" stroke="#38BDF8" strokeWidth="1.5" opacity="0.5"/>
              </svg>
              <span className="text-[#EDEDED] font-semibold tracking-[0.1em] text-sm uppercase">
                Fabric OS
              </span>
            </div>
            <p className="text-xs text-[#4A4A52] leading-[1.6] max-w-xs">
              A cross-platform application under active development. This site
              will become its official information and download hub.
            </p>
          </div>

          {/* Links */}
          <nav
            className="lg:col-span-8 lg:col-start-7"
            aria-label="Footer navigation"
          >
            <p className="text-xs text-[#4A4A52] tracking-[0.15em] uppercase mb-5 font-medium">
              Links
            </p>
            <ul className="flex flex-wrap gap-x-8 gap-y-3" role="list">
              <li>
                <a
                  href="/press"
                  className="text-sm text-[#88888C] hover:text-[#EDEDED] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B] rounded-sm"
                >
                  Press
                </a>
              </li>
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  {link.isAvailable && link.url ? (
                    <a
                      href={link.url}
                      className="text-sm text-[#88888C] hover:text-[#EDEDED] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B] rounded-sm"
                      style={{ transitionTimingFunction: "cubic-bezier(0.2,0.8,0.2,1)" }}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <span className="text-sm text-[#2E2E36] flex items-center gap-2">
                      {link.label}
                      <span className="text-[0.65rem] text-[#2E2E36] tracking-[0.1em] uppercase border border-[#222226] px-1.5 py-0.5 rounded-sm">
                        Planned
                      </span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1A1A1E] pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-xs text-[#2E2E36]">
            © {currentYear} Fabric OS. All rights reserved.
          </p>
          <p className="text-xs text-[#2E2E36] font-mono tracking-wide">
            v0.0.0-dev
          </p>
        </div>
      </div>
    </footer>
  );
}

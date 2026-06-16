import { useState } from "react";
import { FAQ } from "@/data/pressKitData";

export default function PressFAQ() {
  const [open, setOpen] = useState(null);

  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <section
      id="press-faq"
      className="border-b border-[#1E1E22] py-24 lg:py-32"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-[120rem] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-3">
            <h2
              id="faq-heading"
              className="text-xs font-semibold tracking-[0.2em] uppercase text-[#38BDF8]"
            >
              FAQ
            </h2>
          </div>

          <div className="lg:col-span-9">
            <dl className="border border-[#1E1E22] rounded-sm overflow-hidden divide-y divide-[#1E1E22]">
              {FAQ.map((item, i) => {
                const isOpen = open === i;
                const isPlaceholder = item.a.startsWith("[");
                return (
                  <div key={i} className="bg-[#0D0D0F]">
                    <dt>
                      <button
                        onClick={() => toggle(i)}
                        aria-expanded={isOpen}
                        className="
                          w-full flex items-center justify-between gap-4
                          px-8 py-5 text-left
                          hover:bg-[#0F0F11] transition-colors duration-200
                          focus-visible:outline-none focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-[#38BDF8]
                        "
                      >
                        <span className="text-sm font-medium text-[#EDEDED] leading-[1.4]">
                          {item.q}
                        </span>
                        <svg
                          width="14" height="14" viewBox="0 0 14 14" fill="none"
                          aria-hidden="true"
                          className={`shrink-0 transition-transform duration-200 text-[#4A4A52] ${isOpen ? "rotate-180" : ""}`}
                        >
                          <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </dt>
                    {isOpen && (
                      <dd className="px-8 pb-6">
                        <p className={`text-sm leading-[1.7] ${isPlaceholder ? "text-[#3A3A42] italic" : "text-[#88888C]"}`}>
                          {item.a}
                        </p>
                      </dd>
                    )}
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
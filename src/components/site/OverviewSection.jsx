import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function OverviewSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="what"
      ref={ref}
      className="border-b border-[#1E1E22] py-24 lg:py-32"
      aria-labelledby="overview-heading"
    >
      <div
        className={`
          max-w-[120rem] mx-auto px-6 lg:px-10
          transition-all duration-700
          motion-reduce:transition-none
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        `}
        style={{ transitionTimingFunction: "cubic-bezier(0.2,0.8,0.2,1)" }}
      >
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-3">
            <h2
              id="overview-heading"
              className="text-xs font-semibold tracking-[0.2em] uppercase text-[#38BDF8] mb-2"
            >
              Overview
            </h2>
          </div>
          <div className="lg:col-span-9">
            <p className="text-[clamp(1.25rem,2.5vw,2rem)] text-[#EDEDED] leading-[1.5] font-light max-w-4xl mb-8">
              Fabric OS is a unified interface layer for connected spaces. It is
              designed to make devices, services, automation, and controls easier
              to understand and use — without requiring users to adopt a single
              vendor ecosystem.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1E1E22] border border-[#1E1E22] rounded-sm overflow-hidden">
              {[
                {
                  label: "Single Interface",
                  desc: "One application for controls spread across multiple systems and vendors.",
                },
                {
                  label: "Local Operation",
                  desc: "Designed to function fully within your local network, without cloud dependency.",
                },
                {
                  label: "Your Devices",
                  desc: "Planned for Windows, macOS, Android, and iPhone and iPad.",
                },
              ].map((item) => (
                <div key={item.label} className="bg-[#0A0A0B] p-6">
                  <div className="text-xs text-[#38BDF8] tracking-[0.15em] uppercase mb-2 font-medium">
                    {item.label}
                  </div>
                  <p className="text-sm text-[#88888C] leading-[1.6]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
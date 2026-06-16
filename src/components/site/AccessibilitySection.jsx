import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AccessibilitySection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="accessibility"
      className="border-b border-[#1E1E22] py-24 lg:py-32"
      aria-labelledby="accessibility-heading"
    >
      <div className="max-w-[120rem] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-3">
            <h2
              id="accessibility-heading"
              className="text-xs font-semibold tracking-[0.2em] uppercase text-[#38BDF8]"
            >
              Accessibility
            </h2>
          </div>
          <div
            ref={ref}
            className={`
              lg:col-span-9
              transition-all duration-700
              motion-reduce:transition-none
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
            style={{ transitionTimingFunction: "cubic-bezier(0.2,0.8,0.2,1)" }}
          >
            <p className="text-[clamp(1.1rem,2vw,1.5rem)] text-[#EDEDED] leading-[1.5] font-light max-w-3xl mb-10">
              Users should be able to adjust layout, scale, appearance,
              interaction style, and information density to match their needs —
              not adapt to a fixed interface that assumes a single way of working.
            </p>
            <div className="grid sm:grid-cols-3 gap-8">
              {[
                {
                  label: "Layout and Scale",
                  desc: "Information density, type size, and spatial arrangement are configurable at the application level.",
                },
                {
                  label: "Appearance",
                  desc: "Visual themes, contrast modes, and color presentation can be adjusted independently of the operating system.",
                },
                {
                  label: "Interaction",
                  desc: "Input method, keyboard navigation, and focus behavior are designed to support a range of motor and sensory preferences.",
                },
              ].map((item) => (
                <div key={item.label}>
                  <h3 className="text-xs font-semibold text-[#EDEDED] tracking-[0.12em] uppercase mb-3">
                    {item.label}
                  </h3>
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
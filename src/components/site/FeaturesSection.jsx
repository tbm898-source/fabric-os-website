import { FEATURES } from "@/data/siteData";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function FeaturesSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="features"
      ref={ref}
      className="border-b border-[#1E1E22] py-24 lg:py-32"
      aria-labelledby="features-heading"
    >
      <div className="max-w-[120rem] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-3">
            <h2
              id="features-heading"
              className="text-xs font-semibold tracking-[0.2em] uppercase text-[#38BDF8]"
            >
              Features
            </h2>
          </div>
          <div className="lg:col-span-9">
            <p className="text-lg text-[#88888C] leading-[1.6] max-w-2xl mb-16">
              Fabric OS is being designed around a set of principles that
              prioritize clarity, control, and durability over feature density.
            </p>
            <div
              ref={ref}
              className={`
                grid sm:grid-cols-2 gap-px bg-[#1E1E22] border border-[#1E1E22] rounded-sm overflow-hidden
                transition-all duration-700
                motion-reduce:transition-none
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
              `}
              style={{ transitionTimingFunction: "cubic-bezier(0.2,0.8,0.2,1)" }}
            >
              {FEATURES.map((feature, index) => (
                <FeatureCell
                  key={feature.id}
                  feature={feature}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCell({ feature, index }) {
  return (
    <div
      className="bg-[#0A0A0B] p-8 group hover:bg-[#0E0E10] transition-colors duration-300"
      style={{ transitionTimingFunction: "cubic-bezier(0.2,0.8,0.2,1)" }}
    >
      <div className="flex items-start gap-4">
        <span
          className="text-xs text-[#2A2A2F] font-mono mt-1 select-none w-6 shrink-0"
          aria-hidden="true"
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <div>
          <h3 className="text-sm font-semibold text-[#EDEDED] tracking-wide mb-3 group-hover:text-white transition-colors duration-200">
            {feature.title}
          </h3>
          <p className="text-sm text-[#88888C] leading-[1.6]">
            {feature.description}
          </p>
        </div>
      </div>
    </div>
  );
}
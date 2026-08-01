import { useScrollReveal } from "@/hooks/useScrollReveal";
import { PRODUCT_LINKS } from "@/data/siteData";

export default function OverviewSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="why-fabric"
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
              Why Fabric
            </h2>
          </div>
          <div className="lg:col-span-9">
            <p className="text-[clamp(1.25rem,2.5vw,2rem)] text-[#EDEDED] leading-[1.5] font-light max-w-4xl mb-8">
              The smart home has enough apps, hubs, clouds, and dashboards. What
              it needs is a human layer.
            </p>
            <p className="text-base text-[#88888C] leading-[1.6] max-w-3xl mb-8">
              Fabric sits above the technical inventory and translates it into a
              place people can understand: rooms, routines, roles, and clear
              choices. An interactive web prototype is available now.{" "}
              <a
                href={PRODUCT_LINKS.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#38BDF8] hover:text-[#5cc8fa] underline underline-offset-2 transition-colors duration-200"
              >
                Open the live demo
              </a>
              .
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1E1E22] border border-[#1E1E22] rounded-sm overflow-hidden">
              {[
                {
                  label: "One coherent place",
                  desc: "See the home as rooms, scenes, and needs—not a list of vendor integrations.",
                },
                {
                  label: "Your systems remain yours",
                  desc: "Fabric is designed to work with existing systems instead of replacing what already works.",
                },
                {
                  label: "Made for different people",
                  desc: "Adaptable views can be calmer for guests and family or denser for power users.",
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

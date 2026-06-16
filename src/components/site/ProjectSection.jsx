import { useScrollReveal } from "@/hooks/useScrollReveal";

const environments = [
  "Homes",
  "Workshops",
  "Classrooms",
  "Studios",
  "Vehicles",
  "Shared Spaces",
];

export default function ProjectSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="project"
      className="border-b border-[#1E1E22] py-24 lg:py-32"
      aria-labelledby="project-heading"
    >
      <div className="max-w-[120rem] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-3">
            <h2
              id="project-heading"
              className="text-xs font-semibold tracking-[0.2em] uppercase text-[#38BDF8]"
            >
              Project
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
            <p className="text-[clamp(1.25rem,2.5vw,2rem)] text-[#EDEDED] leading-[1.5] font-light max-w-4xl mb-12">
              Fabric OS is intended to become a durable interface between people
              and the increasingly fragmented systems inside the spaces where
              they live, work, create, and move through the world.
            </p>
            <p className="text-base text-[#88888C] leading-[1.6] max-w-3xl mb-12">
              The systems inside spaces — environmental controls, local networks,
              media, automation rules, connected devices — have multiplied
              rapidly while the tools to manage them have remained fragmented and
              inconsistent. Fabric OS is being built to address that gap: a
              single, well-designed application that can span environments without
              requiring users to surrender control to any one vendor or platform.
            </p>

            {/* Environments */}
            <div className="border-t border-[#1E1E22] pt-10">
              <p className="text-xs text-[#4A4A52] tracking-[0.2em] uppercase mb-6 font-medium">
                Intended Environments
              </p>
              <div className="flex flex-wrap gap-3">
                {environments.map((env) => (
                  <span
                    key={env}
                    className="px-4 py-2 border border-[#2A2A2F] text-xs text-[#88888C] tracking-wide rounded-sm"
                  >
                    {env}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { useScrollReveal } from "@/hooks/useScrollReveal";

const privacyPrinciples = [
  {
    title: "Local Control",
    description:
      "Core functions are designed to operate entirely within the user's local network. The application does not require an internet connection to perform its primary role.",
  },
  {
    title: "User Ownership",
    description:
      "Configuration, data, and preferences belong to the user. Nothing is stored on external servers unless the user explicitly connects to a service that requires it.",
  },
  {
    title: "No Telemetry by Default",
    description:
      "Fabric OS will not collect usage data, diagnostics, or analytics without explicit opt-in. The default state is silent.",
  },
  {
    title: "Minimal Cloud Dependence",
    description:
      "Where cloud or remote connectivity is supported, it will be optional and clearly labeled. The system degrades gracefully without it.",
  },
];

export default function PrivacySection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="privacy"
      className="border-b border-[#1E1E22] py-24 lg:py-32"
      aria-labelledby="privacy-heading"
    >
      <div className="max-w-[120rem] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-3">
            <h2
              id="privacy-heading"
              className="text-xs font-semibold tracking-[0.2em] uppercase text-[#38BDF8]"
            >
              Privacy
            </h2>
          </div>
          <div className="lg:col-span-9">
            <p className="text-[clamp(1.1rem,2vw,1.5rem)] text-[#EDEDED] leading-[1.5] font-light max-w-3xl mb-16">
              Fabric OS is being designed around user ownership, understandable
              systems, local control, and a deliberate reduction of unnecessary
              cloud dependence.
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
              {privacyPrinciples.map((item) => (
                <div key={item.title} className="bg-[#0A0A0B] p-8">
                  <div className="w-1 h-6 bg-[#38BDF8] mb-5 opacity-60" aria-hidden="true" />
                  <h3 className="text-sm font-semibold text-[#EDEDED] mb-3 tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#88888C] leading-[1.6]">
                    {item.description}
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
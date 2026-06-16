import { PLATFORMS } from "@/data/siteData";
import { useScrollReveal } from "@/hooks/useScrollReveal";

// Platform SVG Icons — monochrome
const PlatformIcon = ({ id }) => {
  const icons = {
    windows: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8" aria-hidden="true">
        <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
      </svg>
    ),
    macos: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8" aria-hidden="true">
        <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
      </svg>
    ),
    android: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8" aria-hidden="true">
        <path d="M17.523 15.3414c-.5511 0-.9993-.4483-.9993-.9993s.4483-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993.0001.5511-.4482.9993-.9993.9993m-11.046 0c-.5511 0-.9993-.4483-.9993-.9993s.4482-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993 0 .5511-.4483.9993-.9993.9993m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5743-6.1185-9.4396"/>
      </svg>
    ),
    ios: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8" aria-hidden="true">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
      </svg>
    ),
  };
  return icons[id] || null;
};

export default function PlatformsSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="platforms"
      className="border-b border-[#1E1E22] py-24 lg:py-32"
      aria-labelledby="platforms-heading"
    >
      <div className="max-w-[120rem] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-3">
            <h2
              id="platforms-heading"
              className="text-xs font-semibold tracking-[0.2em] uppercase text-[#38BDF8]"
            >
              Platforms
            </h2>
          </div>
          <div className="lg:col-span-9">
            <p className="text-lg text-[#88888C] leading-[1.6] max-w-2xl mb-12">
              Fabric OS is planned for the following platforms. A consistent
              interface model will be maintained across all supported
              environments.
            </p>
            <div
              ref={ref}
              className={`
                grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1E1E22] border border-[#1E1E22] rounded-sm overflow-hidden
                transition-all duration-700
                motion-reduce:transition-none
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
              `}
              style={{ transitionTimingFunction: "cubic-bezier(0.2,0.8,0.2,1)" }}
            >
              {PLATFORMS.map((platform) => (
                <div
                  key={platform.id}
                  className="bg-[#0A0A0B] p-8 group hover:bg-[#0E0E10] transition-colors duration-300 hover:[border-top-color:#38BDF8]"
                  style={{ transitionTimingFunction: "cubic-bezier(0.2,0.8,0.2,1)" }}
                >
                  <div className="text-[#2E2E36] group-hover:text-[#38BDF8] transition-colors duration-300 mb-5">
                    <PlatformIcon id={platform.id} />
                  </div>
                  <h3 className="text-sm font-semibold text-[#EDEDED] mb-3 tracking-wide">
                    {platform.name}
                  </h3>
                  <p className="text-xs text-[#88888C] leading-[1.6]">
                    {platform.shortDescription}
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
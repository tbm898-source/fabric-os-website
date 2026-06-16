import { PRESS_PHILOSOPHY } from "@/data/pressKitData";

export default function PressPhilosophy() {
  return (
    <section
      id="press-philosophy"
      className="border-b border-[#1E1E22] py-24 lg:py-32"
      aria-labelledby="press-philosophy-heading"
    >
      <div className="max-w-[120rem] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-3">
            <h2
              id="press-philosophy-heading"
              className="text-xs font-semibold tracking-[0.2em] uppercase text-[#38BDF8] mb-4"
            >
              Design Philosophy
            </h2>
            <p className="text-xs text-[#4A4A52] leading-[1.6]">
              Fabric OS does not bypass operating-system security. It makes
              security boundaries visible, understandable, navigable, and
              user-controlled.
            </p>
          </div>

          <div className="lg:col-span-9">
            <dl className="grid sm:grid-cols-2 gap-px bg-[#1E1E22] border border-[#1E1E22] rounded-sm overflow-hidden">
              {PRESS_PHILOSOPHY.map((p) => (
                <div
                  key={p.id}
                  className="bg-[#0A0A0B] p-8 group hover:bg-[#0E0E10] transition-colors duration-300"
                >
                  <dt className="text-sm font-semibold text-[#EDEDED] tracking-wide mb-3 group-hover:text-white transition-colors duration-200">
                    {p.title}
                  </dt>
                  <dd className="text-sm text-[#88888C] leading-[1.6]">
                    {p.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
import { AUDIENCES } from "@/data/pressKitData";

export default function PressAudiences() {
  return (
    <section
      id="audiences"
      className="border-b border-[#1E1E22] py-24 lg:py-32"
      aria-labelledby="audiences-heading"
    >
      <div className="max-w-[120rem] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-3">
            <h2
              id="audiences-heading"
              className="text-xs font-semibold tracking-[0.2em] uppercase text-[#38BDF8]"
            >
              Who Fabric OS Is For
            </h2>
          </div>

          <div className="lg:col-span-9">
            <dl className="space-y-px border border-[#1E1E22] rounded-sm overflow-hidden">
              {AUDIENCES.map((a) => (
                <div
                  key={a.id}
                  className="bg-[#0D0D0F] px-8 py-6 hover:bg-[#0F0F11] transition-colors duration-200 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8"
                >
                  <dt className="text-sm font-semibold text-[#EDEDED] tracking-wide shrink-0 sm:w-48">
                    {a.title}
                  </dt>
                  <dd className="text-sm text-[#88888C] leading-[1.6]">
                    {a.description}
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
import { APPROVED_LANGUAGE } from "@/data/pressKitData";

export default function PressApprovedLanguage() {
  return (
    <section
      id="approved-language"
      className="border-b border-[#1E1E22] py-24 lg:py-32"
      aria-labelledby="language-heading"
    >
      <div className="max-w-[120rem] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-3">
            <h2
              id="language-heading"
              className="text-xs font-semibold tracking-[0.2em] uppercase text-[#38BDF8] mb-4"
            >
              Approved Language
            </h2>
            <p className="text-xs text-[#4A4A52] leading-[1.6]">
              Use these descriptions when writing about Fabric OS. Avoid the
              terms listed below unless the specific claim is technically
              verified.
            </p>
          </div>

          <div className="lg:col-span-9 grid sm:grid-cols-2 gap-6">
            {/* Preferred */}
            <div className="bg-[#0D0D0F] border border-[#1E1E22] rounded-sm p-8">
              <h3 className="text-xs font-semibold text-[#38BDF8] tracking-[0.15em] uppercase mb-5">
                Preferred
              </h3>
              <ul className="space-y-3">
                {APPROVED_LANGUAGE.preferred.map((term) => (
                  <li key={term} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#38BDF8]/40 shrink-0" aria-hidden="true" />
                    <span className="text-sm text-[#EDEDED] leading-[1.5]">{term}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Avoid */}
            <div className="bg-[#0D0D0F] border border-[#1E1E22] rounded-sm p-8">
              <h3 className="text-xs font-semibold text-[#FACC15] tracking-[0.15em] uppercase mb-5">
                Avoid Unless Verified
              </h3>
              <ul className="space-y-3">
                {APPROVED_LANGUAGE.avoid.map((term) => (
                  <li key={term} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-sm bg-[#FACC15]/30 shrink-0" aria-hidden="true" />
                    <span className="text-sm text-[#4A4A52] leading-[1.5]">{term}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
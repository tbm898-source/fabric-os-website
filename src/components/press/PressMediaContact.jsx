import { MEDIA_CONTACT } from "@/data/pressKitData";
import { downloadPressKit } from "@/lib/pressKitDownload";

export default function PressMediaContact() {
  const fields = [
    { label: "Name", value: MEDIA_CONTACT.name },
    { label: "Role", value: MEDIA_CONTACT.role },
    { label: "Email", value: MEDIA_CONTACT.email },
    { label: "Website", value: MEDIA_CONTACT.website },
    { label: "GitHub", value: MEDIA_CONTACT.github },
    { label: "Social", value: MEDIA_CONTACT.social },
    { label: "Location", value: MEDIA_CONTACT.location },
  ];

  return (
    <section
      id="media-contact"
      className="border-b border-[#1E1E22] py-24 lg:py-32"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-[120rem] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-3">
            <h2
              id="contact-heading"
              className="text-xs font-semibold tracking-[0.2em] uppercase text-[#38BDF8]"
            >
              Media Contact
            </h2>
          </div>

          <div className="lg:col-span-9">
            <div className="bg-[#0D0D0F] border border-[#1E1E22] rounded-sm overflow-hidden">
              <dl className="divide-y divide-[#1E1E22]">
                {fields.map((f) => {
                  const isPlaceholder = f.value.startsWith("[");
                  return (
                    <div
                      key={f.label}
                      className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 px-8 py-4"
                    >
                      <dt className="text-xs font-semibold text-[#EDEDED] tracking-[0.1em] uppercase shrink-0 sm:w-28">
                        {f.label}
                      </dt>
                      <dd className={`text-sm leading-[1.6] ${isPlaceholder ? "text-[#3A3A42] italic" : "text-[#88888C]"}`}>
                        {f.value}
                      </dd>
                    </div>
                  );
                })}
              </dl>

              <div className="px-8 py-6 border-t border-[#1E1E22] bg-[#0A0A0B]">
                <p className="text-sm text-[#88888C] leading-[1.6] mb-1">
                  {MEDIA_CONTACT.responseTime}
                </p>
                <p className="text-xs text-[#4A4A52] leading-[1.6]">
                  {MEDIA_CONTACT.pressNote}
                </p>
              </div>
            </div>

            {/* Download CTA */}
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={downloadPressKit}
                className="
                  inline-flex items-center gap-2 px-5 py-2.5
                  bg-[#EDEDED] text-[#0A0A0B]
                  text-sm font-semibold tracking-wide rounded-sm
                  hover:bg-white transition-colors duration-200
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B]
                "
              >
                Download Full Press Kit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
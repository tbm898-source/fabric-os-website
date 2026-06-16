import { BRAND_ASSETS } from "@/data/pressKitData";

export default function PressBrandAssets() {
  return (
    <section
      id="brand-assets"
      className="border-b border-[#1E1E22] py-24 lg:py-32"
      aria-labelledby="brand-assets-heading"
    >
      <div className="max-w-[120rem] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-3">
            <h2
              id="brand-assets-heading"
              className="text-xs font-semibold tracking-[0.2em] uppercase text-[#38BDF8] mb-4"
            >
              Brand Assets
            </h2>
            <p className="text-xs text-[#4A4A52] leading-[1.6]">
              All assets listed below are placeholders. Final design files will
              be made available before the first public release. Do not reproduce
              or modify without confirmation.
            </p>
          </div>

          <div className="lg:col-span-9">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1E1E22] border border-[#1E1E22] rounded-sm overflow-hidden">
              {BRAND_ASSETS.map((asset) => (
                <div
                  key={asset.id}
                  className="bg-[#0A0A0B] p-6 group hover:bg-[#0E0E10] transition-colors duration-200"
                >
                  {/* Placeholder thumbnail */}
                  <div
                    className="w-full h-20 bg-[#111113] border border-[#1E1E22] rounded-sm mb-4 flex items-center justify-center"
                    aria-label={`${asset.title} placeholder`}
                  >
                    <span className="text-[10px] text-[#2A2A2F] font-mono tracking-widest uppercase">
                      Pending
                    </span>
                  </div>

                  <h3 className="text-xs font-semibold text-[#EDEDED] tracking-wide mb-3 group-hover:text-white transition-colors duration-200">
                    {asset.title}
                  </h3>

                  <dl className="space-y-1.5">
                    <AssetMeta label="File type" value={asset.fileType} />
                    <AssetMeta label="Use" value={asset.use} />
                    <AssetMeta label="Background" value={asset.background} />
                    <AssetMeta label="Spacing" value={asset.spacing} />
                    <AssetMeta
                      label="Modifiable"
                      value={asset.modifiable ? "Yes" : "No"}
                      highlight={!asset.modifiable}
                    />
                  </dl>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AssetMeta({ label, value, highlight = false }) {
  return (
    <div className="flex gap-2">
      <dt className="text-[10px] text-[#3A3A42] tracking-[0.1em] uppercase shrink-0 w-20 mt-0.5">
        {label}
      </dt>
      <dd className={`text-[11px] leading-[1.5] ${highlight ? "text-[#FACC15]" : "text-[#4A4A52]"}`}>
        {value}
      </dd>
    </div>
  );
}
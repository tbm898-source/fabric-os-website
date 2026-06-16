import { PLATFORMS } from "@/data/siteData";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function DownloadSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="download"
      className="border-b border-[#1E1E22] py-24 lg:py-32"
      aria-labelledby="download-heading"
    >
      <div className="max-w-[120rem] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-3">
            <h2
              id="download-heading"
              className="text-xs font-semibold tracking-[0.2em] uppercase text-[#38BDF8] mb-4"
            >
              Download
            </h2>
            <p className="text-xs text-[#4A4A52] leading-[1.6]">
              Release information will appear here when versions become
              available. This page will be updated as development progresses.
            </p>
          </div>

          <div
            ref={ref}
            className={`
              lg:col-span-9 space-y-px
              transition-all duration-700
              motion-reduce:transition-none
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
            style={{ transitionTimingFunction: "cubic-bezier(0.2,0.8,0.2,1)" }}
          >
            {PLATFORMS.map((platform) => (
              <PlatformStatusBlock key={platform.id} platform={platform} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PlatformStatusBlock({ platform }) {
  const isAvailable = platform.status === "available" && platform.downloadUrl;

  return (
    <div className="bg-[#0D0D0F] border border-[#1E1E22] rounded-sm overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 border-b border-[#1E1E22]">
        <div className="flex items-center gap-4">
          <h3 className="text-sm font-semibold text-[#EDEDED] tracking-wide">
            {platform.name}
          </h3>
          {/* Status badge */}
          {isAvailable ? (
            <span
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm text-xs font-medium bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/20"
              aria-live="polite"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" aria-hidden="true" />
              Available
            </span>
          ) : (
            <span
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm text-xs font-medium bg-[#FACC15]/10 text-[#FACC15] border border-[#FACC15]/20"
              aria-live="polite"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15]" aria-hidden="true" />
              In Development
            </span>
          )}
        </div>

        {/* Action — only rendered when a real URL exists */}
        {isAvailable && platform.downloadUrl ? (
          <a
            href={platform.downloadUrl}
            className="
              inline-flex items-center gap-2 px-5 py-2.5
              bg-[#EDEDED] text-[#0A0A0B]
              text-sm font-semibold tracking-wide
              hover:bg-white transition-colors duration-200
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0D0F]
              rounded-sm
            "
            style={{ transitionTimingFunction: "cubic-bezier(0.2,0.8,0.2,1)" }}
          >
            Download
            {platform.version && ` v${platform.version}`}
          </a>
        ) : (
          <p className="text-xs text-[#4A4A52] leading-[1.6] sm:text-right max-w-xs">
            No release available yet. Development is in progress.
          </p>
        )}
      </div>

      {/* Metadata — renders only when real values exist */}
      {hasMetadata(platform) && (
        <div className="p-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {platform.version && (
            <MetaField label="Version" value={platform.version} />
          )}
          {platform.releaseDate && (
            <MetaField label="Released" value={platform.releaseDate} />
          )}
          {platform.systemRequirements && (
            <MetaField
              label="System Requirements"
              value={platform.systemRequirements}
            />
          )}
          {platform.releaseNotes && (
            <MetaField
              label="Release Notes"
              value={platform.releaseNotes}
              wide
            />
          )}
          {platform.checksum && (
            <MetaField
              label="Checksum"
              value={platform.checksum}
              mono
              wide
            />
          )}
        </div>
      )}
    </div>
  );
}

function MetaField({ label, value, mono = false, wide = false }) {
  return (
    <div className={wide ? "sm:col-span-2 lg:col-span-2" : ""}>
      <dt className="text-xs text-[#4A4A52] tracking-[0.12em] uppercase mb-1.5 font-medium">
        {label}
      </dt>
      <dd
        className={`text-xs text-[#88888C] leading-[1.6] break-all ${
          mono ? "font-mono text-[0.7rem]" : ""
        }`}
      >
        {value}
      </dd>
    </div>
  );
}

function hasMetadata(platform) {
  return !!(
    platform.version ||
    platform.releaseDate ||
    platform.systemRequirements ||
    platform.releaseNotes ||
    platform.checksum
  );
}
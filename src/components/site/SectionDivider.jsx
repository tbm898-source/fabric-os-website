// Full-viewport-width hairline rule between sections
export default function SectionDivider() {
  return (
    <div
      className="w-full h-px bg-[#1E1E22]"
      aria-hidden="true"
      role="separator"
    />
  );
}
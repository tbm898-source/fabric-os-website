// ─────────────────────────────────────────────────────────────────────────────
// Fabric OS — Centralized Site Data
// Update this file to reflect changes in release status, links, or copy.
// ─────────────────────────────────────────────────────────────────────────────

export const SITE_META = {
  title: "Fabric OS",
  description:
    "A cross-platform application under active development, designed to provide a clear, customizable interface for connected devices, home systems, automation, and local services.",
  ogType: "website",
};

// Navigation items — href maps to section IDs
export const NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Features", href: "#features" },
  { label: "Platforms", href: "#platforms" },
  { label: "Privacy", href: "#privacy" },
  { label: "Project", href: "#project" },
  { label: "Download", href: "#download" },
];

// ─────────────────────────────────────────────────────────────────────────────
// Platform & Release Data
// status: 'in_development' | 'available'
// All fields except status are optional. Omit rather than set to null/TBD.
// ─────────────────────────────────────────────────────────────────────────────
export const PLATFORMS = [
  {
    id: "windows",
    name: "Windows",
    shortDescription:
      "Desktop application for Windows 10 and later. Designed for keyboard, pointer, and touch input.",
    status: "in_development",
    // version, releaseDate, systemRequirements, releaseNotes, checksum, downloadUrl — omitted until available
  },
  {
    id: "macos",
    name: "macOS",
    shortDescription:
      "Native macOS application supporting Apple Silicon and Intel. Integrates with system accessibility and privacy controls.",
    status: "in_development",
  },
  {
    id: "android",
    name: "Android",
    shortDescription:
      "Mobile application for Android devices. Optimized for a range of screen sizes and input methods.",
    status: "in_development",
  },
  {
    id: "ios",
    name: "iPhone and iPad",
    shortDescription:
      "iOS and iPadOS application supporting iPhone and iPad. Adapts to both compact and expanded display environments.",
    status: "in_development",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Core Features
// ─────────────────────────────────────────────────────────────────────────────
export const FEATURES = [
  {
    id: "unified-control",
    title: "Unified Control Interface",
    description:
      "A single interface layer for devices, services, and local systems. Reduces the cognitive overhead of managing multiple applications and disconnected controls.",
  },
  {
    id: "customizable-layouts",
    title: "Customizable Layouts and Skins",
    description:
      "Layout, information density, and visual appearance can be adjusted to match individual preferences, environments, and workflows without modifying the underlying system.",
  },
  {
    id: "accessibility",
    title: "Accessibility-Focused Design",
    description:
      "Built from the outset with accessibility as a structural requirement. Interaction style, scale, contrast, and input method support are configurable rather than fixed.",
  },
  {
    id: "local-first",
    title: "Local-First Operation",
    description:
      "Core functions operate without a cloud dependency. The application is designed to remain fully functional on a local network without requiring an active internet connection.",
  },
  {
    id: "privacy",
    title: "Privacy-Conscious Architecture",
    description:
      "No telemetry by default. No accounts required. Data stays on the user's devices and network unless the user explicitly chooses otherwise.",
  },
  {
    id: "multi-system",
    title: "Multi-System and Protocol Support",
    description:
      "Intended to integrate with a range of home automation standards, local services, and connected device protocols without requiring vendor lock-in.",
  },
  {
    id: "cross-platform",
    title: "Desktop and Mobile Applications",
    description:
      "Planned for Windows, macOS, Android, and iPhone and iPad. A consistent interface model across all supported platforms.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Footer Links
// isAvailable: false → renders as plain text with 'Planned' label
// isAvailable: true  → requires a real, non-fabricated url
// ─────────────────────────────────────────────────────────────────────────────
export const FOOTER_LINKS = [
  { label: "Documentation", isAvailable: false },
  { label: "Project Status", isAvailable: false },
  { label: "Privacy", isAvailable: false },
  { label: "GitHub", isAvailable: false },
  { label: "Contact", isAvailable: false },
];
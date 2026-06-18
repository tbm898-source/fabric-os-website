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
  { label: "Philosophy", href: "#philosophy" },
  { label: "Project", href: "#project" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Download", href: "#download" },
];

// Product and repository links — update when URLs change
export const PRODUCT_LINKS = {
  liveDemo: "https://fabric-home-os.base44.app/demo",
  productRepo: "https://github.com/tbm898-source/fabric",
  websiteRepo: "https://github.com/tbm898-source/fabric-os-website",
};

// ─────────────────────────────────────────────────────────────────────────────
// Development Roadmap
// status: 'complete' | 'active' | 'next' | 'planned'
// No dates — milestones only.
// ─────────────────────────────────────────────────────────────────────────────
export const ROADMAP = [
  {
    id: "foundation",
    phase: "Phase 1",
    title: "Foundation",
    status: "active",
    description:
      "The web prototype establishes the core dashboard, role and skin system, capability-based permissions, and a read-only bridge for live status overlay. Native desktop and mobile builds remain planned.",
    items: [
      "Web prototype dashboard with Retro, Family, and Power skins",
      "Role-based visibility and control (Admin, Family, Guest)",
      "Public interactive demo at fabric-home-os.base44.app/demo",
      "Read-only bridge snapshot import (fabric.bridge.v1, development)",
    ],
  },
  {
    id: "desktop",
    phase: "Phase 2",
    title: "Desktop Platforms",
    status: "next",
    description:
      "Delivering the first installable builds for Windows and macOS. Focus is on platform integration, system accessibility APIs, and local-first reliability across both architectures.",
    items: [
      "Windows application packaging and distribution",
      "macOS application — Apple Silicon and Intel",
      "Platform-native accessibility integration",
      "Keyboard and pointer interaction model",
    ],
  },
  {
    id: "protocol",
    phase: "Phase 3",
    title: "Protocol and Integration Layer",
    status: "planned",
    description:
      "Expanding the range of supported home automation standards and device protocols. The goal is broad compatibility without vendor lock-in, using open and documented interfaces where possible.",
    items: [
      "Multi-protocol device communication layer",
      "Integration configuration interface",
      "Local automation rule engine",
      "Service bridge for common home automation standards",
    ],
  },
  {
    id: "mobile",
    phase: "Phase 4",
    title: "Mobile Platforms",
    status: "planned",
    description:
      "Bringing Fabric OS to Android and iPhone and iPad. The interface model adapts to compact environments while maintaining full feature parity with the desktop applications.",
    items: [
      "Android application — phones and tablets",
      "iPhone and iPad application",
      "Adaptive layout for compact displays",
      "Cross-device state synchronization over local network",
    ],
  },
  {
    id: "customization",
    phase: "Phase 5",
    title: "Customization and Themes",
    status: "planned",
    description:
      "Expanding user-facing layout and skin configuration beyond the three prototype skins. This phase delivers deeper tools for individuals to adapt Fabric OS to their specific environment and workflow.",
    items: [
      "Layout editor and saved presets",
      "Extended visual theme and skin system",
      "Accessibility preference profiles",
      "Per-space and per-device configuration",
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Design Philosophy
// ─────────────────────────────────────────────────────────────────────────────
export const DESIGN_PHILOSOPHY = {
  summary:
    "Fabric OS is designed to keep users in control of their own systems, files, permissions, and project data. Core workflows are built to run on the user's own device or local network, without requiring constant dependence on a remote service. Cloud features exist to extend what the local system can do — not to replace it.",
  principles: [
    {
      id: "local-ownership",
      title: "Local Ownership",
      description:
        "User files, project state, configuration, logs, and system context are stored on hardware the user controls whenever practical. Nothing is moved off-device without a deliberate action by the user.",
    },
    {
      id: "offline-resilience",
      title: "Offline Resilience",
      description:
        "Core functions remain available during internet outages or service interruptions. Fabric OS is designed so that a loss of connectivity does not make the user's system unmanageable.",
    },
    {
      id: "privacy-by-architecture",
      title: "Privacy by Architecture",
      description:
        "Fabric OS minimizes data collection to what is necessary for the task at hand. There is no hidden telemetry. Any transfer of data to an external service is made visible, labeled with its purpose, and requires user action to enable.",
    },
    {
      id: "explicit-consent",
      title: "Explicit Consent",
      description:
        "Sensitive permissions, integrations, and remote connections require clear user approval before they are established. Fabric OS does not request access silently or bundle permission requests inside unrelated workflows.",
    },
    {
      id: "least-privilege",
      title: "Least-Privilege Access",
      description:
        "Applications, agents, and services receive only the permissions necessary to complete the task they are performing. Broader access is not granted speculatively or held after a task is complete.",
    },
    {
      id: "transparent-behavior",
      title: "Transparent System Behavior",
      description:
        "Users can see what Fabric OS is doing, what data it is accessing, where that data is stored, and why a specific action requires elevated privileges. Behavior is not obscured behind abstractions or silent background processes.",
    },
    {
      id: "cloud-optional",
      title: "Cloud as an Optional Extension",
      description:
        "Remote services may support synchronization, collaboration, backup, or heavy computation. They do not become the sole authority over the user's system. Removing a cloud integration should not break local functionality.",
    },
    {
      id: "portability",
      title: "Portability and Reversibility",
      description:
        "Users can export their data, remove integrations, restore prior configurations, and move between systems. Fabric OS does not create lock-in through proprietary formats or opaque data structures that make leaving impractical.",
    },
    {
      id: "human-readable-security",
      title: "Human-Readable Security",
      description:
        "When an action is blocked by macOS, Windows, Linux, or another platform, Fabric OS explains the restriction in plain language: which permission controls it, what the risk is, and what the smallest safe change would be. Fabric OS does not bypass operating-system security — it makes security boundaries understandable, navigable, and controlled by the user.",
    },
  ],
};

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
  {
    label: "Project Status",
    isAvailable: true,
    url: "https://github.com/tbm898-source/fabric",
  },
  { label: "Privacy", isAvailable: false },
  {
    label: "GitHub",
    isAvailable: true,
    url: "https://github.com/tbm898-source/fabric-os-website",
  },
  { label: "Contact", isAvailable: false },
];
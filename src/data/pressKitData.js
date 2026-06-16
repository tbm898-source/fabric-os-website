// ─────────────────────────────────────────────────────────────────────────────
// Fabric OS — Press Kit Data
// ─────────────────────────────────────────────────────────────────────────────

export const PRESS_META = {
  version: "0.1.0",
  lastUpdated: "2026-06",
  tagline:
    "Fabric OS is a local-first system coordination platform that helps users understand, control, and connect their devices, permissions, projects, and AI tools without surrendering ownership of their data.",
};

// ─────────────────────────────────────────────────────────────────────────────
// Overviews
// ─────────────────────────────────────────────────────────────────────────────
export const OVERVIEW_SHORT = `Modern operating environments are difficult to understand. Permissions are buried across dozens of menus. Files live in a mixture of local folders and cloud storage. Settings differ between macOS, Windows, and Linux. AI tools and automation services introduce new agents, tokens, and data flows that are often invisible to the user. Fabric OS is designed to reduce that confusion. It provides a single, consistent interface for understanding what a system can do, what is currently blocked, where data is stored, and what each permission actually controls. Core workflows run locally. Cloud services are optional extensions. Users keep ownership of their files, configuration, and system state.`;

export const OVERVIEW_LONG = `Most users today work across several platforms simultaneously — a Windows desktop, a MacBook, a Linux server, a handful of cloud services, and an increasing number of AI-assisted tools. Each environment has its own permission model, its own settings interface, its own concept of where files belong, and its own idea of what the user is allowed to do and why. When something goes wrong — an application is blocked, a permission is denied, an agent cannot access a file, a deployment fails — the error message rarely explains what happened, which system control caused the problem, or what the user can safely do to fix it.

Fabric OS is designed to address this directly.

The platform provides a unified interface for understanding and managing the real state of a system: what devices are available, which permissions are active, what software is installed and ready, what has changed recently, and what is preventing a task from completing. Rather than presenting users with raw system settings, Fabric OS translates system behavior into plain language. When an action is blocked, Fabric OS identifies the controlling permission, describes the risk, and suggests the smallest safe change. It does not bypass operating-system security. It makes that security understandable.

The architecture is local-first by design. Core functions — device visibility, permission inspection, configuration management, system state history — run on the user's own hardware and local network. An internet connection is not required for these workflows to operate. Cloud services can be connected to support synchronization, backup, collaboration, or computation-heavy tasks, but they are optional. Removing a cloud integration does not break local functionality.

Data ownership follows from the architecture. User files, project state, configuration, logs, and system context are stored on hardware the user controls. There is no default telemetry. External data transfers are made visible and require user action. Sensitive permissions and remote connections require explicit approval before they are established.

Fabric OS also addresses a problem specific to the current moment in software: the difficulty of understanding what AI agents, automation tools, and integrated services are actually doing, what they have access to, and how to limit or revoke that access. The platform is designed to make those relationships visible, bounded, and reversible.

Users can export their data, remove integrations, restore prior configurations, and move between systems. The platform does not create lock-in through proprietary formats or opaque data structures. Portability and reversibility are architectural requirements, not optional features.

Fabric OS is under active development. It is not a finished product. This press kit presents the project's design intent, architectural commitments, and current development status accurately and without exaggeration.`;

// ─────────────────────────────────────────────────────────────────────────────
// Design Philosophy Principles
// ─────────────────────────────────────────────────────────────────────────────
export const PRESS_PHILOSOPHY = [
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
      "Core functions remain available during internet outages or service interruptions. A loss of connectivity does not make the user's system unmanageable.",
  },
  {
    id: "privacy-by-architecture",
    title: "Privacy by Architecture",
    description:
      "Data collection is limited to what is necessary for the task at hand. There is no default telemetry. Any transfer of data to an external service is made visible, labeled with its purpose, and requires user action.",
  },
  {
    id: "explicit-consent",
    title: "Explicit Consent",
    description:
      "Sensitive permissions, integrations, and remote connections require clear user approval before they are established. Access is not requested silently or bundled inside unrelated workflows.",
  },
  {
    id: "least-privilege",
    title: "Least-Privilege Access",
    description:
      "Applications, agents, and services receive only the permissions necessary to complete the current task. Broader access is not granted speculatively or retained after a task is complete.",
  },
  {
    id: "transparent-behavior",
    title: "Transparent System Behavior",
    description:
      "Users can see what Fabric OS is doing, what data it is accessing, where that data is stored, and why an action requires elevated privileges. No significant behavior is obscured behind silent background processes.",
  },
  {
    id: "cloud-optional",
    title: "Cloud as an Optional Extension",
    description:
      "Remote services may support synchronization, collaboration, backup, or computation. They do not become the sole authority over the user's system. Removing a cloud integration does not break local functionality.",
  },
  {
    id: "portability",
    title: "Portability and Reversibility",
    description:
      "Users can export their data, remove integrations, restore prior configurations, and move between systems. Fabric OS does not create lock-in through proprietary formats or opaque data structures.",
  },
  {
    id: "human-readable-security",
    title: "Human-Readable Security",
    description:
      "When an action is blocked by macOS, Windows, Linux, or another platform, Fabric OS explains the restriction in plain language — which permission controls it, what the risk is, and what the smallest safe change would be. Fabric OS does not bypass operating-system security. It makes security boundaries understandable, navigable, and user-controlled.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Key Product Concepts
// Status: available | prototype | in_development | planned | conceptual
// ─────────────────────────────────────────────────────────────────────────────
export const PRODUCT_CONCEPTS = [
  {
    id: "capability-map",
    title: "Capability Map",
    status: "in_development",
    description:
      "Shows what a device or system can do, what is currently available, and what is blocked. Surfaces hardware capabilities, installed software, active services, and permission states in a single readable view.",
  },
  {
    id: "permission-navigator",
    title: "Permission Navigator",
    status: "in_development",
    description:
      "Explains permissions in plain language, including scope, risk level, and the steps required to change them safely. Identifies which system controls which permission and whether that permission is currently active, blocked, or revocable.",
  },
  {
    id: "developer-readiness",
    title: "Developer Readiness",
    status: "planned",
    description:
      "Shows whether a machine is prepared to build, test, package, sign, or deploy a specific project. Identifies missing tools, misconfigured environments, and permission gaps before a build is attempted.",
  },
  {
    id: "blocked-action-resolver",
    title: "Blocked Action Resolver",
    status: "planned",
    description:
      "When an action fails, explains what failed, why it failed, which system control caused the failure, and the smallest safe fix available. Replaces generic error messages with actionable, specific guidance.",
  },
  {
    id: "system-state-history",
    title: "System State History",
    status: "conceptual",
    description:
      "Records permission changes, installed tools, configuration changes, integrations added or removed, and significant system events. Provides a readable audit trail that makes the recent history of a system understandable.",
  },
  {
    id: "safe-operating-profiles",
    title: "Safe Operating Profiles",
    status: "conceptual",
    description:
      "Allows users to define and switch between documented operating states — stable development, testing, event mode, restricted access, or project-specific environments — with clear descriptions of what each profile permits and restricts.",
  },
];

const STATUS_LABELS = {
  available: "Available now",
  prototype: "Prototype",
  in_development: "In active development",
  planned: "Planned",
  conceptual: "Conceptual",
};
export { STATUS_LABELS };

// ─────────────────────────────────────────────────────────────────────────────
// Audiences
// ─────────────────────────────────────────────────────────────────────────────
export const AUDIENCES = [
  {
    id: "developers",
    title: "Developers",
    description:
      "People building, testing, or deploying software who need a clear view of their machine's readiness, permission state, and environment configuration across multiple platforms.",
  },
  {
    id: "educators",
    title: "Technical Educators",
    description:
      "Instructors and curriculum developers who teach systems, networking, security, or software development and need tools that make abstract concepts visible and navigable.",
  },
  {
    id: "creators",
    title: "Independent Creators",
    description:
      "Individuals managing their own infrastructure, workflows, and tools who want clarity on what their systems are doing without needing a dedicated IT department.",
  },
  {
    id: "small-orgs",
    title: "Small Organizations",
    description:
      "Teams and organizations that manage their own local servers, shared devices, and mixed cloud and local infrastructure without large IT support.",
  },
  {
    id: "mixed-platform",
    title: "Mixed-Platform Teams",
    description:
      "People working across Windows, macOS, Linux, cloud services, and local infrastructure simultaneously, where inconsistent behavior and fragmented settings create friction.",
  },
  {
    id: "permission-confused",
    title: "Users Navigating Permissions",
    description:
      "Anyone who has been blocked by a macOS privacy prompt, a Windows UAC dialog, a Linux permission error, or a cloud service restriction and did not understand what it meant or what to do next.",
  },
  {
    id: "ai-users",
    title: "Users with AI Tools",
    description:
      "People using AI assistants, local language models, or automation agents who want to understand what those tools have access to and how to limit or revoke that access.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Founder Bio
// ─────────────────────────────────────────────────────────────────────────────
export const FOUNDER = {
  name: "Tim Milkewicz",
  role: "Founder and Developer, Fabric OS",
  shortBio: `Tim Milkewicz is a technical educator, curriculum developer, and systems builder with a background in programming, infrastructure, networking, automation, and hands-on troubleshooting. He has worked across local servers, event systems, creative technology, and AI-assisted development. Fabric OS reflects his belief that stable, understandable systems are not a luxury — they are a foundation for doing reliable work and living a more stable life.`,
  longBio: `Tim Milkewicz has spent his career at the intersection of systems, education, and hands-on technical work. His background spans programming, server administration, local networking, infrastructure management, automation, creative technology, and event systems. He has designed curriculum, built tools for learners, troubleshot complex production environments, and worked with the range of platforms and permission models that characterize modern technical work.

That experience shaped the problems Fabric OS is built to address. Most users — developers, educators, creators, and independent operators — work across several platforms simultaneously. Permissions are buried. Settings are inconsistent. Error messages are opaque. AI tools and automation services introduce data flows that are invisible by default. Systems that are difficult to understand become systems that are difficult to trust.

Tim built Fabric OS to reduce that friction. The design reflects a consistent conviction: that complex systems can be made understandable without sacrificing accuracy, that security can be navigated without being bypassed, and that ownership of data and configuration is something that should belong to the user rather than to a platform.

Fabric OS incorporates experience with AI-assisted development workflows, local model deployment, and the practical challenges of integrating AI tools into systems where data boundaries matter. The platform is designed to make those relationships visible and reversible — a reflection of Tim's broader belief that technology should be durable, honest about what it does, and accessible to people who are not systems administrators by training.

The name of the project reflects its intent: a fabric that connects systems, agents, devices, and permissions into something coherent — without obscuring the threads.`,
};

// ─────────────────────────────────────────────────────────────────────────────
// Fact Sheet
// ─────────────────────────────────────────────────────────────────────────────
export const FACT_SHEET = [
  { label: "Project Name", value: "Fabric OS" },
  { label: "Category", value: "System coordination platform / local-first application" },
  { label: "Current Status", value: "Active development — Phase 1 (Foundation)" },
  { label: "Target Platforms", value: "Windows, macOS, Android, iPhone and iPad" },
  { label: "Architecture Model", value: "Local-first; cloud as optional extension" },
  { label: "Privacy Model", value: "No default telemetry; no required accounts; data stays on user-controlled hardware" },
  { label: "Data Ownership", value: "User retains ownership of files, configuration, and system context" },
  { label: "Cloud Dependency", value: "None required for core functionality" },
  { label: "Licensing Status", value: "[To be determined — not yet confirmed]" },
  { label: "Repository", value: "[Not yet public]" },
  { label: "Website", value: "[Current domain — placeholder]" },
  { label: "Contact", value: "[See Media Contact section]" },
  { label: "First Public Release", value: "[Not yet scheduled — no date committed]" },
];

// ─────────────────────────────────────────────────────────────────────────────
// Approved Language
// ─────────────────────────────────────────────────────────────────────────────
export const APPROVED_LANGUAGE = {
  preferred: [
    "local-first system coordination platform",
    "user-controlled system layer",
    "privacy-conscious architecture",
    "cross-platform capability and permission interface",
    "human-readable system guidance",
    "local-first application under active development",
    "system state and permission visibility tool",
    "platform in active development",
  ],
  avoid: [
    "fully decentralized",
    "completely private",
    "unhackable",
    "fully autonomous",
    "universal operating system",
    "military-grade security",
    "replaces macOS, Windows, or Linux",
    "AI-powered (unless a specific AI feature is described)",
    "enterprise-grade (unless verified by a specific customer context)",
    "zero-trust (unless the specific implementation is described)",
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// FAQ
// ─────────────────────────────────────────────────────────────────────────────
export const FAQ = [
  {
    q: "What is Fabric OS?",
    a: "Fabric OS is a local-first system coordination platform under active development. It is designed to give users a clear, consistent interface for understanding what their devices can do, what permissions are active, where their data is stored, and what is preventing a task from completing.",
  },
  {
    q: "Is Fabric OS a full operating system?",
    a: "No. Fabric OS is an application-layer platform that runs on top of existing operating systems — currently targeting Windows, macOS, Android, and iPhone and iPad. It does not replace the OS kernel, manage hardware at the firmware level, or act as a bootloader.",
  },
  {
    q: "Does Fabric OS replace macOS, Windows, or Linux?",
    a: "No. Fabric OS runs on top of those systems and works within their permission and security models. It is designed to make those models understandable and navigable, not to replace or bypass them.",
  },
  {
    q: "Does Fabric OS bypass system security?",
    a: "No. Fabric OS does not bypass operating-system security controls. When a permission is required, Fabric OS explains what the permission is, what it controls, and what the smallest safe action is. The user and the operating system retain authority.",
  },
  {
    q: "Where is user data stored?",
    a: "Core data — files, configuration, system state, logs — is stored on hardware the user controls. Fabric OS does not move data off-device without an explicit user action.",
  },
  {
    q: "Does Fabric OS require the cloud?",
    a: "No. Core functions are designed to operate without an active internet connection. Cloud services can be connected to support synchronization, backup, or collaboration, but they are optional extensions, not requirements.",
  },
  {
    q: "Can users export their data?",
    a: "Yes. Portability and reversibility are architectural requirements. Users can export their configuration, project state, and stored data. [Specific export formats and tooling are in development.]",
  },
  {
    q: "Can integrations be removed?",
    a: "Yes. Removing an integration should not break local functionality. Fabric OS is designed so that no single external service becomes a required dependency for core operation.",
  },
  {
    q: "Does Fabric OS work offline?",
    a: "Core functions — device visibility, permission inspection, configuration management, local system state — are designed to operate without an internet connection. Some features that depend on external services will require connectivity.",
  },
  {
    q: "How does Fabric OS differ from system settings or device-management tools?",
    a: "System settings surfaces raw controls without explaining them. Device-management tools are typically designed for administrators managing other people's machines. Fabric OS is designed for individual users and small teams who want to understand and manage their own systems. It translates system behavior into plain language, identifies what is blocked and why, and provides guidance on the safest way to proceed.",
  },
  {
    q: "Is Fabric OS open source?",
    a: "[Not yet determined. The licensing model has not been finalized. This will be confirmed before the first public release.]",
  },
  {
    q: "What stage of development is Fabric OS in?",
    a: "Fabric OS is in active development, currently in Phase 1 — establishing the core application architecture, data model, and rendering engine. No public release has been scheduled. This press kit reflects the current design intent and development status, not a finished product.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Brand Assets
// ─────────────────────────────────────────────────────────────────────────────
export const BRAND_ASSETS = [
  {
    id: "logo-primary",
    title: "Primary Logo",
    fileType: "SVG, PNG",
    use: "Standard use on dark backgrounds",
    background: "Dark (#0A0A0B or equivalent)",
    spacing: "Minimum clear space: 1× the cap height on all sides",
    modifiable: false,
    status: "placeholder",
  },
  {
    id: "logo-dark",
    title: "Dark Background Logo",
    fileType: "SVG, PNG",
    use: "Marketing materials, website headers, presentation slides on dark backgrounds",
    background: "Dark only",
    spacing: "Minimum clear space: 1× the cap height on all sides",
    modifiable: false,
    status: "placeholder",
  },
  {
    id: "logo-light",
    title: "Light Background Logo",
    fileType: "SVG, PNG",
    use: "Print, white-background documents, light UI contexts",
    background: "Light (#FFFFFF or equivalent)",
    spacing: "Minimum clear space: 1× the cap height on all sides",
    modifiable: false,
    status: "placeholder",
  },
  {
    id: "logo-transparent",
    title: "Transparent PNG",
    fileType: "PNG",
    use: "Compositing on custom backgrounds",
    background: "Transparent — verify contrast before use",
    spacing: "Minimum clear space: 1× the cap height on all sides",
    modifiable: false,
    status: "placeholder",
  },
  {
    id: "logo-svg",
    title: "Vector SVG",
    fileType: "SVG",
    use: "Scalable use at any size — preferred for web and print",
    background: "Verify contrast against destination background",
    spacing: "Minimum clear space: 1× the cap height on all sides",
    modifiable: false,
    status: "placeholder",
  },
  {
    id: "app-icon",
    title: "App Icon",
    fileType: "PNG (multiple resolutions), SVG",
    use: "Application launchers, store listings, taskbars",
    background: "Platform-appropriate",
    spacing: "Do not add padding beyond platform guidelines",
    modifiable: false,
    status: "placeholder",
  },
  {
    id: "favicon",
    title: "Favicon",
    fileType: "ICO, PNG (16px, 32px, 64px)",
    use: "Browser tab, bookmark icon",
    background: "Transparent or solid dark",
    spacing: "No additional padding",
    modifiable: false,
    status: "placeholder",
  },
  {
    id: "social-preview",
    title: "Social Preview Image",
    fileType: "PNG (1200×630px)",
    use: "Open Graph preview for social shares, link previews",
    background: "Dark (#0A0A0B)",
    spacing: "Keep subject within safe zone (1000×530px centered)",
    modifiable: false,
    status: "placeholder",
  },
  {
    id: "screenshots",
    title: "Application Screenshots",
    fileType: "PNG",
    use: "Press coverage, app store listings, presentations",
    background: "Dark UI",
    spacing: "No cropping of interface chrome",
    modifiable: false,
    status: "placeholder",
  },
  {
    id: "founder-headshot",
    title: "Founder Headshot",
    fileType: "JPG, PNG",
    use: "Press coverage, speaker profiles, event materials",
    background: "Neutral",
    spacing: "Do not crop below shoulders for press use",
    modifiable: false,
    status: "placeholder",
  },
  {
    id: "product-mockups",
    title: "Product Mockups",
    fileType: "PNG",
    use: "Product presentations, articles, promotional materials",
    background: "Dark environment",
    spacing: "Do not alter depicted interface content",
    modifiable: false,
    status: "placeholder",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Media Contact
// ─────────────────────────────────────────────────────────────────────────────
export const MEDIA_CONTACT = {
  name: "Tim Milkewicz",
  role: "Founder, Fabric OS",
  email: "[press contact — to be confirmed]",
  website: "[fabricos.com or equivalent — to be confirmed]",
  github: "[not yet public]",
  social: "[to be confirmed]",
  location: "United States",
  responseTime: "Media inquiries are typically responded to within 3–5 business days.",
  pressNote:
    "For press inquiries, interview requests, or partnership discussions, please use the contact above. Please do not publish personal contact details without prior confirmation.",
};

// ─────────────────────────────────────────────────────────────────────────────
// Downloadable press kit files (generated client-side as text blobs)
// ─────────────────────────────────────────────────────────────────────────────
export const PRESS_KIT_FILES = {
  "PRESS_KIT.md": `# Fabric OS — Press Kit

**Version:** 0.1.0  
**Last Updated:** 2026-06  

## Tagline

${PRESS_META.tagline}

## Short Overview

${OVERVIEW_SHORT}

## Long Overview

${OVERVIEW_LONG}

---

*For full press materials including the Fact Sheet, Founder Bio, FAQ, Design Philosophy, and Brand Guidelines, see the additional files in this package.*
`,

  "FACT_SHEET.md": `# Fabric OS — Fact Sheet

| Field | Value |
|---|---|
${FACT_SHEET.map(f => `| ${f.label} | ${f.value} |`).join("\n")}
`,

  "FOUNDER_BIO.md": `# Fabric OS — Founder Bio

**${FOUNDER.name}**  
${FOUNDER.role}

## Short Bio (~75 words)

${FOUNDER.shortBio}

## Long Bio (~250 words)

${FOUNDER.longBio}
`,

  "DESIGN_PHILOSOPHY.md": `# Fabric OS — Design Philosophy

Fabric OS does not bypass operating-system security. It makes security boundaries visible, understandable, navigable, and user-controlled.

${PRESS_PHILOSOPHY.map(p => `## ${p.title}\n\n${p.description}`).join("\n\n")}
`,

  "FAQ.md": `# Fabric OS — Frequently Asked Questions

${FAQ.map(f => `## ${f.q}\n\n${f.a}`).join("\n\n")}
`,

  "BRAND_GUIDELINES.md": `# Fabric OS — Brand Guidelines

## Approved Language

### Preferred Descriptions

${APPROVED_LANGUAGE.preferred.map(l => `- ${l}`).join("\n")}

### Avoid Unless Technically Verified

${APPROVED_LANGUAGE.avoid.map(l => `- ${l}`).join("\n")}

## Brand Assets

All assets are placeholders pending final design. Do not reproduce or modify without confirmation.

${BRAND_ASSETS.map(a => `### ${a.title}\n- **File type:** ${a.fileType}\n- **Use:** ${a.use}\n- **Background:** ${a.background}\n- **Spacing:** ${a.spacing}\n- **Modifiable:** ${a.modifiable ? "Yes" : "No"}\n- **Status:** ${a.status}`).join("\n\n")}
`,

  "assets/contact/MEDIA_CONTACT.md": `# Fabric OS — Media Contact

**Name:** ${MEDIA_CONTACT.name}  
**Role:** ${MEDIA_CONTACT.role}  
**Email:** ${MEDIA_CONTACT.email}  
**Website:** ${MEDIA_CONTACT.website}  
**GitHub:** ${MEDIA_CONTACT.github}  
**Social:** ${MEDIA_CONTACT.social}  
**Location:** ${MEDIA_CONTACT.location}  

## Response Expectations

${MEDIA_CONTACT.responseTime}

${MEDIA_CONTACT.pressNote}
`,

  "README.md": `# Fabric OS Press Kit

Version 0.1.0 — 2026-06

## Contents

- PRESS_KIT.md — Full press overview, short and long overviews
- FACT_SHEET.md — Structured fact sheet
- FOUNDER_BIO.md — Short and long bios for Tim Milkewicz
- DESIGN_PHILOSOPHY.md — Nine core design principles
- FAQ.md — Frequently asked questions with accurate, current answers
- BRAND_GUIDELINES.md — Approved language and brand asset specifications
- assets/contact/MEDIA_CONTACT.md — Press contact information
- assets/logos/ — Logo files (placeholders — final assets pending)
- assets/icons/ — Icon files (placeholders)
- assets/screenshots/ — Application screenshots (pending)
- assets/social/ — Social preview images (pending)
- assets/founder/ — Founder headshot (pending)

## Usage Notes

All product claims in this press kit are labeled with their current status:
Available now | Prototype | In active development | Planned | Conceptual

Do not imply that planned or conceptual features already exist.
Do not use language from the Avoid section in BRAND_GUIDELINES.md.

For questions, see assets/contact/MEDIA_CONTACT.md.
`,
};
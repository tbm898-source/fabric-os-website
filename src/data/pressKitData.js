// Fabric OS — press kit source of truth. The page and downloadable kit share this data.

export const PRESS_META = {
  version: "0.2.0",
  lastUpdated: "2026-08",
  tagline: "Make every device feel like one home.",
};

export const OVERVIEW_SHORT = `Fabric OS is a human layer for connected spaces. It is designed to bring devices, rooms, scenes, and local services into one calm, adaptable interface instead of making people juggle a different app for every product. The working web prototype demonstrates the interaction model; native desktop and mobile applications are planned. Fabric OS is local-first in direction, privacy-conscious, and built around interfaces that can adapt to different people, roles, and accessibility needs.`;

export const OVERVIEW_LONG = `Connected spaces are often technically capable and experientially fragmented. Lights, climate, audio, security, media, energy, and automations may each have their own app, vocabulary, account, and rules. The person using the space is left to remember which product controls which part of daily life.

Fabric OS is designed to sit above that fragmentation as a human-centered interface layer. Its organizing model begins with the way people experience a place: rooms, scenes, routines, roles, and shared context. The goal is not to replace every device protocol or automation hub. It is to make the systems already present feel coherent.

The interface is intended to adapt without forking the home into separate products. A resident, guest, child, caregiver, or installer may need a different level of detail and control. Skins can change density, contrast, language, navigation, and emphasis while preserving the same underlying space. Accessibility is treated as part of the interaction model rather than a final visual adjustment.

Fabric OS is local-first in direction. Core coordination should remain useful on the local network, and cloud services should be optional extensions rather than the sole authority over the space. Integrations, privacy behavior, and platform support are still being developed and must not be described as complete.

A working web prototype is publicly available today. Native desktop and mobile applications, broader device integrations, role-aware views, and deeper local coordination are planned. Fabric OS remains an early-stage product, and this press kit distinguishes what can be tried now from what is still in development or planned.`;

export const PRESS_PHILOSOPHY = [
  { id: "people-first", title: "People Before Products", description: "The interface begins with rooms, activities, and human intent rather than vendor names or protocol details." },
  { id: "one-space", title: "One Coherent Space", description: "Different devices and services should read as parts of one environment, even when they come from different ecosystems." },
  { id: "adaptable", title: "Adaptable by Person and Role", description: "The same connected space can present different controls, density, language, and guidance for residents, guests, caregivers, and installers." },
  { id: "accessible", title: "Accessibility as Architecture", description: "Contrast, scale, input method, cognitive load, and clear language are designed into the interface model from the start." },
  { id: "local-first", title: "Local-First Direction", description: "Core coordination is intended to remain useful on the local network, with cloud services treated as optional extensions where practical." },
  { id: "honest", title: "Visible and Honest State", description: "Fabric OS should show what is connected, unavailable, delayed, or still unsupported without pretending that every system is under control." },
];

export const PRODUCT_CONCEPTS = [
  { id: "web-prototype", title: "Connected-Space Web Prototype", status: "prototype", description: "A working public prototype demonstrates the visual system, navigation, room-oriented model, and overall product direction." },
  { id: "rooms-scenes", title: "Rooms and Scenes", status: "in_development", description: "Organizes controls around places and meaningful activities so people can act on a room or moment instead of hunting through device apps." },
  { id: "role-aware", title: "Role-Aware Views", status: "planned", description: "Adapts available controls and guidance for residents, guests, children, caregivers, and technical operators." },
  { id: "skins", title: "Skins and Accessibility", status: "in_development", description: "Allows the same space to change visual density, contrast, scale, language, navigation, and emphasis without changing the underlying system." },
  { id: "local-bridge", title: "Local Coordination Layer", status: "planned", description: "Connects supported devices, hubs, and local services while keeping essential coordination close to the space it serves." },
  { id: "native-apps", title: "Native Desktop and Mobile Apps", status: "planned", description: "Extends the Fabric OS interface to macOS, Windows, iPhone, iPad, and Android after the interaction model is validated." },
];

const STATUS_LABELS = {
  available: "Available now",
  prototype: "Working prototype",
  in_development: "In active development",
  planned: "Planned",
  conceptual: "Conceptual",
};
export { STATUS_LABELS };

export const AUDIENCES = [
  { id: "households", title: "Connected Households", description: "People who want everyday control of a connected home without memorizing which brand or app owns each device." },
  { id: "shared-homes", title: "Shared Homes", description: "Residents, families, guests, and caregivers who need one space to work differently for different people." },
  { id: "accessibility", title: "Accessibility-Minded Users", description: "People who benefit from clearer language, adaptable layouts, lower cognitive load, or alternative ways to navigate and control a space." },
  { id: "enthusiasts", title: "Smart-Home Enthusiasts", description: "Builders who already have capable automations but want a more coherent and human interface above them." },
  { id: "integrators", title: "Integrators and Installers", description: "Professionals exploring a client-facing layer that can explain and operate complex connected environments more simply." },
  { id: "independent", title: "People Avoiding Vendor Lock-In", description: "Users who want the experience of their space to outlast any single device brand, cloud account, or proprietary app." },
];

export const FOUNDER = {
  name: "Tim Milkewicz",
  role: "Founder and Developer, Fabric OS",
  shortBio: `Tim Milkewicz is a technical educator, curriculum developer, and systems builder with experience across programming, infrastructure, networking, automation, event systems, and creative technology. He founded Fabric OS to make connected spaces feel coherent, adaptable, and understandable to the people who actually live and work in them.`,
  longBio: `Tim Milkewicz has spent his career at the intersection of systems, education, and hands-on technical work. His background spans programming, server administration, local networking, infrastructure management, automation, creative technology, curriculum design, and event systems.

That work repeatedly exposed the same gap: technically capable systems often remain difficult for ordinary people to understand and use. Connected spaces intensify the problem because each device can arrive with its own application, account, vocabulary, and assumptions.

Tim founded Fabric OS to explore a more human layer above those systems—one organized around rooms, scenes, roles, and the lived experience of a place. The project reflects his belief that complex technology can remain powerful while becoming calmer, clearer, and more accessible.`,
};

export const FACT_SHEET = [
  { label: "Project Name", value: "Fabric OS" },
  { label: "Promise", value: "Make every device feel like one home" },
  { label: "Category", value: "Human-centered interface for connected spaces" },
  { label: "Current Status", value: "Early-stage development; working public web prototype" },
  { label: "Available Now", value: "Interactive web prototype" },
  { label: "Planned Platforms", value: "macOS, Windows, iPhone, iPad, and Android" },
  { label: "Architecture Direction", value: "Local-first; cloud services optional where practical" },
  { label: "Website", value: "https://fabric-os-hub.base44.app" },
  { label: "Prototype", value: "https://fabric-home-os.base44.app/demo" },
  { label: "Source", value: "https://github.com/tbm898-source/fabric-os-website" },
  { label: "Licensing", value: "Not yet announced" },
  { label: "Media Contact", value: "Not yet published" },
  { label: "First Public Release", value: "No release date announced" },
];

export const APPROVED_LANGUAGE = {
  preferred: [
    "human layer for connected spaces",
    "Make every device feel like one home",
    "one adaptable interface for rooms, scenes, devices, and local services",
    "working public web prototype",
    "local-first in direction",
    "privacy-conscious and accessibility-minded",
    "native desktop and mobile applications are planned",
  ],
  avoid: [
    "finished product",
    "universal operating system",
    "replaces device hubs or operating systems",
    "works with every device",
    "fully local or completely private",
    "no cloud dependency",
    "native apps are available",
    "public release date confirmed",
    "AI-powered, unless a specific implemented feature is identified",
  ],
};

export const FAQ = [
  { q: "What is Fabric OS?", a: "Fabric OS is a human-centered interface layer for connected spaces. It aims to bring rooms, scenes, devices, and local services into one adaptable experience." },
  { q: "Is Fabric OS an operating system?", a: "Not in the conventional sense. Fabric OS does not replace macOS, Windows, Android, iOS, device firmware, or automation hubs. The name describes an interface and coordination layer above those systems." },
  { q: "What can people try now?", a: "A public web prototype is available. It demonstrates the interaction model and product direction; it should not be presented as a complete connected-home platform." },
  { q: "Does it connect to every smart-home device?", a: "No. Broad device and hub integrations are planned, but compatibility claims have not yet been announced." },
  { q: "Is it local-first?", a: "Local-first is the architectural direction: essential coordination should remain useful on the local network where practical. That work is still in development, so it is not yet a guarantee about every feature." },
  { q: "Why roles and skins?", a: "A home is shared by people with different needs. Roles and skins are intended to adapt control, detail, contrast, scale, language, and navigation without creating a separate system for each person." },
  { q: "Are native apps available?", a: "Not yet. Native applications for desktop and mobile platforms are planned after the interaction model is further validated." },
  { q: "When will Fabric OS launch?", a: "No public release date has been announced. The working web prototype is the clearest current representation of the project." },
];

export const BRAND_ASSETS = [
  { id: "logo", title: "Primary Logo", fileType: "SVG, PNG", use: "Editorial identification", background: "Dark or light", spacing: "Clear space guidance pending", modifiable: false, status: "not_released" },
  { id: "social-preview", title: "Social Preview", fileType: "PNG (1200×630)", use: "Link and article previews", background: "Dark", spacing: "Safe-area guidance pending", modifiable: false, status: "not_released" },
  { id: "screenshots", title: "Product Screenshots", fileType: "PNG", use: "Editorial coverage", background: "Product UI", spacing: "Use uncropped where possible", modifiable: false, status: "not_released" },
];

export const MEDIA_CONTACT = {
  name: "Tim Milkewicz",
  role: "Founder, Fabric OS",
  email: "Not yet published",
  website: "https://fabric-os-hub.base44.app",
  github: "https://github.com/tbm898-source/fabric-os-website",
  social: "Not yet published",
  location: "United States",
  responseTime: "A dedicated media contact channel has not yet been published.",
  pressNote: "Until then, the public website and source repository are the authoritative project links.",
};

const factSheetMarkdown = FACT_SHEET.map((item) => `| ${item.label} | ${item.value} |`).join("\n");
const philosophyMarkdown = PRESS_PHILOSOPHY.map((item) => `## ${item.title}\n\n${item.description}`).join("\n\n");
const faqMarkdown = FAQ.map((item) => `## ${item.q}\n\n${item.a}`).join("\n\n");
const preferredMarkdown = APPROVED_LANGUAGE.preferred.map((item) => `- ${item}`).join("\n");
const avoidMarkdown = APPROVED_LANGUAGE.avoid.map((item) => `- ${item}`).join("\n");
const assetsMarkdown = BRAND_ASSETS.map((item) => `### ${item.title}\n- **File type:** ${item.fileType}\n- **Use:** ${item.use}\n- **Status:** Not yet released`).join("\n\n");

export const PRESS_KIT_FILES = {
  "PRESS_KIT.md": `# Fabric OS — Press Kit\n\n**Version:** ${PRESS_META.version}  \n**Last Updated:** ${PRESS_META.lastUpdated}\n\n## Product Promise\n\n${PRESS_META.tagline}\n\n## Short Overview\n\n${OVERVIEW_SHORT}\n\n## Long Overview\n\n${OVERVIEW_LONG}\n`,
  "FACT_SHEET.md": `# Fabric OS — Fact Sheet\n\n| Field | Value |\n|---|---|\n${factSheetMarkdown}\n`,
  "FOUNDER_BIO.md": `# Fabric OS — Founder Bio\n\n**${FOUNDER.name}**  \n${FOUNDER.role}\n\n## Short Bio\n\n${FOUNDER.shortBio}\n\n## Long Bio\n\n${FOUNDER.longBio}\n`,
  "DESIGN_PHILOSOPHY.md": `# Fabric OS — Design Philosophy\n\n${philosophyMarkdown}\n`,
  "FAQ.md": `# Fabric OS — Frequently Asked Questions\n\n${faqMarkdown}\n`,
  "BRAND_GUIDELINES.md": `# Fabric OS — Brand Guidelines\n\n## Preferred descriptions\n\n${preferredMarkdown}\n\n## Avoid unless verified\n\n${avoidMarkdown}\n\n## Brand assets\n\nNo downloadable brand assets have been released.\n\n${assetsMarkdown}\n`,
  "assets/contact/MEDIA_CONTACT.md": `# Fabric OS — Media Contact\n\n**Name:** ${MEDIA_CONTACT.name}  \n**Role:** ${MEDIA_CONTACT.role}  \n**Email:** ${MEDIA_CONTACT.email}  \n**Website:** ${MEDIA_CONTACT.website}  \n**GitHub:** ${MEDIA_CONTACT.github}  \n**Social:** ${MEDIA_CONTACT.social}  \n**Location:** ${MEDIA_CONTACT.location}\n\n${MEDIA_CONTACT.responseTime}\n\n${MEDIA_CONTACT.pressNote}\n`,
  "README.md": `# Fabric OS Press Kit\n\nVersion ${PRESS_META.version} — ${PRESS_META.lastUpdated}\n\nThis package describes the current product direction and clearly distinguishes the working prototype from planned capabilities. Do not imply that planned features or integrations are already available.\n`,
};

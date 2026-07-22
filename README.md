# Fabric OS Website

Public website and press resources for Fabric OS. This repository owns product messaging,
release-status communication, public links, and the website presentation layer. It does not own
Fabric device behavior, permissions, adapters, bridge services, or product state.

## Routes

- `/` — product overview, principles, roadmap, platform status, and notification form
- `/press` — press kit and brand resources

Product status and public URLs are centralized in `src/data/siteData.js`. Press facts and asset
status are centralized in `src/data/pressKitData.js`. Keep claims accurate to the current product;
placeholder assets must remain visibly labeled until final assets exist.

## Local development

```bash
npm ci
npm run dev
```

The repository is connected to its own Base44 project and GitHub repository. Local Base44 app
identity is intentionally not committed; use the Base44 linking workflow when a machine must
deploy or synchronize the project.

## Validation

```bash
npm run check
```

CI runs install, lint, typecheck, build, and a high-severity dependency audit independently from
the Fabric product repository.

## Boundary

- Website repository: `tbm898-source/fabric-os-website`
- Product repository: `tbm898-source/fabric`
- Integration service: separate `event-ingress` project

Changes between these projects cross through documented URLs and versioned contracts—not copied
source files or a shared database.

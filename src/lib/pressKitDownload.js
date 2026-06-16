import { PRESS_KIT_FILES } from "@/data/pressKitData";

/**
 * Generates and downloads the Fabric OS press kit as a single combined
 * Markdown file. A true zip would require an npm package; this ships all
 * content in one well-structured .md file that contains every section.
 */
export function downloadPressKit() {
  const combined = Object.entries(PRESS_KIT_FILES)
    .map(([filename, content]) => {
      const divider = "─".repeat(72);
      return `${divider}\nFILE: ${filename}\n${divider}\n\n${content}`;
    })
    .join("\n\n\n");

  const blob = new Blob([combined], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "fabric-os-press-kit.md";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
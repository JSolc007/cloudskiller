export type { Task, Chapter } from "./types";
import { parseChapterMarkdown } from "./markdown-parser";
import type { Chapter } from "./types";

// Import all markdown files from content folders using Vite's import.meta.glob
// To add a new section (e.g. kubernetes), just add .md files to src/content/kubernetes/
// and add the glob pattern below.
const mdModules = import.meta.glob<string>("../content/**/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

// Parse all markdown files into chapters, sorted by file path (which controls order)
const sortedPaths = Object.keys(mdModules).sort();

export const chapters: Chapter[] = sortedPaths
  .filter((path) => !path.endsWith("README.md"))
  .map((path) => {
    try {
      return parseChapterMarkdown(mdModules[path]);
    } catch (e) {
      console.error(`Failed to parse ${path}:`, e);
      return null;
    }
  })
  .filter((c): c is Chapter => c !== null);

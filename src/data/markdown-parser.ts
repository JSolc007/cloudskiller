import { Chapter, Task } from "./types";

/**
 * Parse a markdown chapter file into a Chapter object.
 * See src/content/README.md for the format specification.
 */
export function parseChapterMarkdown(raw: string): Chapter {
  // Split frontmatter and body
  const fmMatch = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!fmMatch) throw new Error("Invalid chapter markdown: missing frontmatter");

  const frontmatter = parseFrontmatter(fmMatch[1]);
  const body = fmMatch[2].trim();

  const tasks = parseTasksFromBody(body);

  return {
    id: frontmatter.id,
    title: frontmatter.title,
    description: frontmatter.description,
    icon: frontmatter.icon,
    category: frontmatter.category as Chapter["category"],
    tasks,
  };
}

function parseFrontmatter(raw: string): Record<string, string> {
  const result: Record<string, string> = {};
  for (const line of raw.split("\n")) {
    const match = line.match(/^(\w+):\s*(.+)$/);
    if (match) {
      result[match[1]] = match[2].trim();
    }
  }
  return result;
}

function parseTasksFromBody(body: string): Task[] {
  // Split on task headers (## id | title), keeping the delimiter
  const taskBlocks = body.split(/(?=^## )/m).filter((b) => b.trim());
  return taskBlocks.map(parseTask);
}

function parseTask(block: string): Task {
  const lines = block.split("\n");

  // Parse header: ## task-id | Task Title
  const headerMatch = lines[0].match(/^## ([\w-]+) \| (.+)$/);
  if (!headerMatch) throw new Error(`Invalid task header: ${lines[0]}`);

  const id = headerMatch[1];
  const title = headerMatch[2].trim();

  // Parse description (> line)
  const descLine = lines.find((l) => l.startsWith("> "));
  const description = descLine ? descLine.slice(2).trim() : "";

  // Parse type
  const typeLine = lines.find((l) => l.startsWith("Type: "));
  const type = (typeLine?.replace("Type: ", "").trim() || "fill-blank") as Task["type"];

  // Parse code template (```template ... ```)
  const templateStart = lines.findIndex((l) => l.trim() === "```template");
  const templateEnd = lines.findIndex((l, i) => i > templateStart && l.trim() === "```");
  const codeTemplate =
    templateStart >= 0 && templateEnd >= 0
      ? lines.slice(templateStart + 1, templateEnd).join("\n")
      : "";

  // Parse blanks (- BLANK_N: answer | opt1, opt2, ... OR - BLANK_N: answer (hint: ...))
  const blanks: Task["blanks"] = [];
  for (const line of lines) {
    const blankMatch = line.match(/^- (BLANK_\d+): (.+)$/);
    if (!blankMatch) continue;

    const blankId = blankMatch[1];
    const rest = blankMatch[2];

    if (type === "select-option" && rest.includes(" | ")) {
      // select-option: answer | opt1, opt2, opt3, opt4
      const [answer, optionsStr] = rest.split(" | ");
      const options = optionsStr.split(", ").map((o) => o.trim());
      blanks.push({ id: blankId, answer: answer.trim(), options });
    } else {
      // fill-blank: answer (hint: some hint)
      const hintMatch = rest.match(/^(.+?) \(hint: (.+)\)$/);
      if (hintMatch) {
        blanks.push({ id: blankId, answer: hintMatch[1].trim(), hint: hintMatch[2].trim() });
      } else {
        blanks.push({ id: blankId, answer: rest.trim() });
      }
    }
  }

  return { id, title, description, type, codeTemplate, blanks };
}

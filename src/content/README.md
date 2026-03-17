# Content Format Guide

Each `.md` file in a category folder defines one chapter with its tasks.

## Adding a new section (e.g. Kubernetes)

1. Create folder: `src/content/kubernetes/`
2. Add `.md` files (one per chapter)
3. In `src/data/chapters.ts`, add the new category to the `import.meta.glob`
4. In `src/data/types.ts`, add the category string to the union type
5. Add a filter button in `Index.tsx`

## File format

```markdown
---
id: unique-chapter-id
title: Chapter Title
description: Short description of the chapter.
icon: 🎯
category: aws
---

## task-id | Task Title
> Description of what this task tests

Type: select-option

\`\`\`template
The answer is {{BLANK_1}}.
\`\`\`

- BLANK_1: correct answer | Option A, Option B, correct answer, Option C

---

## task-id-2 | Another Task
> Fill in the blank

Type: fill-blank

\`\`\`template
terraform {{BLANK_1}}
\`\`\`

- BLANK_1: init (hint: Initialize working directory)
```

## Rules

- Separate tasks with `---`
- `Type:` must be `select-option` or `fill-blank`
- For **select-option**: options after `|` are comma-separated, one must match the answer
- For **fill-blank**: optionally add hint in parentheses `(hint: your hint)`
- Multiple blanks are supported — just add more `- BLANK_N:` lines
- Code template uses `{{BLANK_N}}` placeholders

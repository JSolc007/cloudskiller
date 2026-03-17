---
id: gl-rules
title: Rules & Conditions
description: Control when jobs run with rules, only/except, workflow.
icon: 🚦
category: gitlab
---

## glr-1 | Rules Keyword
> Modern way to control job execution?

Type: fill-blank

```template
deploy_job:
  {{BLANK_1}}:
    - if: $CI_COMMIT_BRANCH == "main"
```

- BLANK_1: rules (hint: Conditional execution keyword)

---

## glr-2 | Manual Job
> Make a job require manual click?

Type: fill-blank

```template
rules:
  - if: $CI_COMMIT_TAG
    {{BLANK_1}}: manual
```

- BLANK_1: when (hint: Timing keyword)

---

## glr-3 | Never Run
> Skip a job completely?

Type: fill-blank

```template
rules:
  - when: {{BLANK_1}}
```

- BLANK_1: never (hint: Value to skip job)

---

## glr-4 | Changes Filter
> Run only when files change?

Type: fill-blank

```template
rules:
  - {{BLANK_1}}:
      paths:
        - "src/**/*"
```

- BLANK_1: changes (hint: Keyword to detect file changes)

---

## glr-5 | Workflow Rules
> Control when entire pipelines are created?

Type: fill-blank

```template
{{BLANK_1}}:
  rules:
    - if: $CI_COMMIT_BRANCH
```

- BLANK_1: workflow (hint: Pipeline-level rules keyword)

---

## glr-6 | only/except
> Legacy keywords replaced by rules?

Type: select-option

```template
The keywords {{BLANK_1}} are legacy and replaced by rules.
```

- BLANK_1: only/except | only/except, when/unless, if/else, allow/deny

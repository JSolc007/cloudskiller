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

---

## glr-7 | Exists Filter
> Run a job only if a file exists?

Type: fill-blank

```template
rules:
  - {{BLANK_1}}:
      - Dockerfile
```

- BLANK_1: exists (hint: File existence check)

---

## glr-8 | Always Run
> Default 'when' value if rule matches?

Type: select-option

```template
If a rule matches without a 'when' key, the job runs with when: {{BLANK_1}}.
```

- BLANK_1: on_success | on_success, always, manual, delayed

---

## glr-9 | Merge Request Pipeline
> Run a job only on merge requests?

Type: fill-blank

```template
rules:
  - if: ${{BLANK_1}}
```

- BLANK_1: CI_MERGE_REQUEST_ID (hint: Merge request predefined variable)

---

## glr-10 | Delayed Job
> Run a job after a delay?

Type: fill-blank

```template
rules:
  - when: delayed
    {{BLANK_1}}: 30 minutes
```

- BLANK_1: start_in (hint: Delay duration keyword)

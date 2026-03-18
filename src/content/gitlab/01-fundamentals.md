---
id: gl-fundamentals
title: Pipeline Fundamentals
description: .gitlab-ci.yml basics — stages, jobs, scripts.
icon: 🦊
category: gitlab
---

## glf-1 | Config File
> GitLab CI config file name?

Type: fill-blank

```template
# Pipeline config must be named:
{{BLANK_1}}
```

- BLANK_1: .gitlab-ci.yml (hint: Hidden YAML file in repo root)

---

## glf-2 | Stages
> Define pipeline stages.

Type: fill-blank

```template
{{BLANK_1}}:
  - build
  - test
  - deploy
```

- BLANK_1: stages (hint: Top-level key for stage order)

---

## glf-3 | Job Structure
> Assign a job to a stage.

Type: fill-blank

```template
build_app:
  {{BLANK_1}}: build
  script:
    - npm run build
```

- BLANK_1: stage (hint: Which stage this job runs in)

---

## glf-4 | Script
> The key for commands to run?

Type: fill-blank

```template
test_job:
  stage: test
  {{BLANK_1}}:
    - npm test
```

- BLANK_1: script (hint: Commands to execute)

---

## glf-5 | Default Stage
> If no stage is specified, jobs run in…

Type: select-option

```template
Jobs without a stage keyword default to {{BLANK_1}}.
```

- BLANK_1: test | test, build, deploy, default

---

## glf-6 | before_script
> Commands that run before every job?

Type: fill-blank

```template
{{BLANK_1}}:
  - apt-get update
  - npm ci
```

- BLANK_1: before_script (hint: Pre-job hook keyword)

---

## glf-7 | after_script
> Commands that run after every job (even on failure)?

Type: fill-blank

```template
{{BLANK_1}}:
  - echo "Cleanup complete"
```

- BLANK_1: after_script (hint: Post-job hook keyword)

---

## glf-8 | Allow Failure
> Let a job fail without blocking the pipeline?

Type: fill-blank

```template
lint_job:
  script: npm run lint
  {{BLANK_1}}: true
```

- BLANK_1: allow_failure (hint: Continue pipeline on job failure)

---

## glf-9 | Pipeline Trigger
> What triggers a pipeline by default?

Type: select-option

```template
Pipelines are triggered by default on every {{BLANK_1}}.
```

- BLANK_1: git push | git push, merge request, manual click, schedule

---

## glf-10 | Job Dependencies
> Jobs in the same stage run…

Type: select-option

```template
Jobs in the same stage run {{BLANK_1}}.
```

- BLANK_1: in parallel | in parallel, sequentially, randomly, conditionally

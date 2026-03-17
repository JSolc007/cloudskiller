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

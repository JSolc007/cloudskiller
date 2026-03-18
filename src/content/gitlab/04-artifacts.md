---
id: gl-artifacts
title: Artifacts & Cache
description: Pass data between jobs and speed up pipelines.
icon: 💾
category: gitlab
---

## gla-1 | Artifacts
> Save job output for other stages.

Type: fill-blank

```template
build_job:
  script: npm run build
  {{BLANK_1}}:
    paths:
      - dist/
```

- BLANK_1: artifacts (hint: Save files keyword)

---

## gla-2 | Expire Artifacts
> How long to keep artifacts?

Type: fill-blank

```template
artifacts:
  paths: [dist/]
  {{BLANK_1}}: 1 week
```

- BLANK_1: expire_in (hint: Expiration keyword)

---

## gla-3 | Cache
> Reuse files between pipeline runs.

Type: fill-blank

```template
{{BLANK_1}}:
  paths:
    - node_modules/
  key: $CI_COMMIT_REF_SLUG
```

- BLANK_1: cache (hint: Reuse between runs keyword)

---

## gla-4 | Cache vs Artifacts
> Artifacts pass data between…

Type: select-option

```template
Artifacts pass data between {{BLANK_1}}, cache speeds up repeated runs.
```

- BLANK_1: jobs in a pipeline | jobs in a pipeline, pipelines, branches, repos

---

## gla-5 | JUnit Reports
> Publish test results as…

Type: fill-blank

```template
artifacts:
  reports:
    {{BLANK_1}}: test-results.xml
```

- BLANK_1: junit (hint: Test report format)

---

## gla-6 | Needs
> Download artifacts from a specific job?

Type: fill-blank

```template
deploy_job:
  {{BLANK_1}}:
    - job: build_job
      artifacts: true
```

- BLANK_1: needs (hint: Job dependency keyword)

---

## gla-7 | Cache Key
> Use branch name as cache key?

Type: fill-blank

```template
cache:
  key: ${{BLANK_1}}
  paths:
    - node_modules/
```

- BLANK_1: CI_COMMIT_REF_SLUG (hint: URL-safe branch name variable)

---

## gla-8 | Untracked Files
> Include git untracked files in artifacts?

Type: fill-blank

```template
artifacts:
  {{BLANK_1}}: true
  paths:
    - build/
```

- BLANK_1: untracked (hint: Include files not in git)

---

## gla-9 | Dependencies
> Download artifacts from only specific jobs?

Type: fill-blank

```template
test_job:
  stage: test
  {{BLANK_1}}:
    - build_job
```

- BLANK_1: dependencies (hint: Limit artifact downloads)

---

## gla-10 | Cache Policy
> Only upload cache, never download?

Type: fill-blank

```template
cache:
  {{BLANK_1}}: push
  paths:
    - node_modules/
```

- BLANK_1: policy (hint: Cache upload/download control)

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
Artifacts pass data between {{BLANK_1}}, cache speeds up {{BLANK_1}}.
```

- BLANK_1: jobs; repeated runs | jobs; repeated runs, pipelines; stages, branches; tags, repos; forks

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

---
id: gl-templates
title: Templates & Reuse
description: extends, include, anchors, hidden jobs.
icon: 📄
category: gitlab
---

## glt-1 | Hidden Job
> A hidden job starts with…

Type: fill-blank

```template
{{BLANK_1}}node_template:
  image: node:18
  before_script:
    - npm ci
```

- BLANK_1: . (hint: Prefix that makes a job hidden)

---

## glt-2 | Extends
> Inherit from a template job.

Type: fill-blank

```template
test_job:
  {{BLANK_1}}: .node_template
  script:
    - npm test
```

- BLANK_1: extends (hint: Inheritance keyword)

---

## glt-3 | Include Local
> Include another YAML from the repo.

Type: fill-blank

```template
{{BLANK_1}}:
  - local: '/ci/build.yml'
```

- BLANK_1: include (hint: Import external configs)

---

## glt-4 | Include Template
> Include a GitLab-provided template.

Type: fill-blank

```template
include:
  - {{BLANK_1}}: Security/SAST.gitlab-ci.yml
```

- BLANK_1: template (hint: GitLab built-in template keyword)

---

## glt-5 | Include Remote
> Include config from a URL.

Type: fill-blank

```template
include:
  - {{BLANK_1}}: 'https://example.com/ci.yml'
```

- BLANK_1: remote (hint: URL-based include)

---

## glt-6 | Include Project
> Include from another GitLab project.

Type: fill-blank

```template
include:
  - {{BLANK_1}}: 'my-group/ci-templates'
    file: '/templates/deploy.yml'
```

- BLANK_1: project (hint: Cross-project include)

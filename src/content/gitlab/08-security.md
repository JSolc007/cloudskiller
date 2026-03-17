---
id: gl-security
title: Security Scanning
description: SAST, DAST, dependency scanning, container scanning.
icon: 🛡️
category: gitlab
---

## gls-1 | SAST
> What does SAST stand for?

Type: select-option

```template
SAST = {{BLANK_1}}
```

- BLANK_1: Static Application Security Testing | Static Application Security Testing, Secure App Scanning Tool, System Access Security Test, Source Analysis Security Tool

---

## gls-2 | DAST
> DAST tests a…

Type: select-option

```template
DAST tests the application in a {{BLANK_1}} state.
```

- BLANK_1: running | running, compiled, source code, containerized

---

## gls-3 | Enable SAST
> Enable SAST with a template.

Type: fill-blank

```template
include:
  - template: {{BLANK_1}}/SAST.gitlab-ci.yml
```

- BLANK_1: Security (hint: GitLab template category)

---

## gls-4 | Container Scanning
> Scan Docker images for vulnerabilities?

Type: fill-blank

```template
include:
  - template: Security/{{BLANK_1}}.gitlab-ci.yml
```

- BLANK_1: Container-Scanning (hint: Template name for image scanning)

---

## gls-5 | Dependency Scanning
> Scan project dependencies.

Type: fill-blank

```template
include:
  - template: Security/{{BLANK_1}}.gitlab-ci.yml
```

- BLANK_1: Dependency-Scanning (hint: Template for dep scanning)

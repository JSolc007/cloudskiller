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

---

## gls-6 | Secret Detection
> Detect leaked credentials in code?

Type: fill-blank

```template
include:
  - template: Security/{{BLANK_1}}.gitlab-ci.yml
```

- BLANK_1: Secret-Detection (hint: Template for finding secrets)

---

## gls-7 | License Compliance
> Scan for license compatibility issues?

Type: fill-blank

```template
include:
  - template: Security/{{BLANK_1}}.gitlab-ci.yml
```

- BLANK_1: License-Scanning (hint: Template for license checks)

---

## gls-8 | Security Dashboard
> Where do scan results appear?

Type: select-option

```template
Security scan results appear in the {{BLANK_1}}.
```

- BLANK_1: Security Dashboard | Security Dashboard, CI logs, deploy stage, merge request only

---

## gls-9 | Vulnerability Report
> The merge request shows…

Type: select-option

```template
The merge request widget shows {{BLANK_1}} from security scans.
```

- BLANK_1: new vulnerabilities | new vulnerabilities, all code changes, deployment status, test coverage

---

## gls-10 | SAST Analyzers
> SAST uses language-specific…

Type: select-option

```template
SAST uses {{BLANK_1}} to detect vulnerabilities in different languages.
```

- BLANK_1: analyzers | analyzers, compilers, linters, formatters

---
id: gl-docker
title: Docker & Images
description: Job images, services, DinD, Container Registry.
icon: 🐳
category: gitlab
---

## gld-1 | Job Image
> Specify a Docker image for a job.

Type: fill-blank

```template
test_job:
  {{BLANK_1}}: node:18-alpine
  script:
    - npm test
```

- BLANK_1: image (hint: Docker image keyword)

---

## gld-2 | Services
> Add a database service to a job.

Type: fill-blank

```template
test_job:
  image: node:18
  {{BLANK_1}}:
    - postgres:15
  script:
    - npm test
```

- BLANK_1: services (hint: Sidecar containers keyword)

---

## gld-3 | DinD
> Docker-in-Docker service name?

Type: fill-blank

```template
services:
  - {{BLANK_1}}
```

- BLANK_1: docker:dind (hint: Docker-in-Docker image)

---

## gld-4 | Registry Login
> Predefined var for registry password?

Type: fill-blank

```template
docker login -u $CI_REGISTRY_USER -p ${{BLANK_1}} $CI_REGISTRY
```

- BLANK_1: CI_REGISTRY_PASSWORD (hint: Registry auth variable)

---

## gld-5 | Push Image
> Tag and push to GitLab Container Registry.

Type: fill-blank

```template
docker build -t $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA .
docker {{BLANK_1}} $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA
```

- BLANK_1: push (hint: Upload image command)

---

## gld-6 | Default Image
> Set a default image for all jobs?

Type: fill-blank

```template
{{BLANK_1}}:
  image: node:18
```

- BLANK_1: default (hint: Top-level defaults keyword)

---

## gld-7 | Service Alias
> Give a service a hostname alias?

Type: fill-blank

```template
services:
  - name: postgres:15
    {{BLANK_1}}: db
```

- BLANK_1: alias (hint: Custom hostname for service)

---

## gld-8 | Registry Image Variable
> Predefined variable for the registry image path?

Type: fill-blank

```template
docker build -t ${{BLANK_1}}:latest .
```

- BLANK_1: CI_REGISTRY_IMAGE (hint: Full registry image path)

---

## gld-9 | Multi-Stage Build
> Build and test in one pipeline using multi-stage Docker?

Type: select-option

```template
Multi-stage Dockerfiles reduce final image size by {{BLANK_1}}.
```

- BLANK_1: separating build and runtime layers | separating build and runtime layers, compressing files, removing logs, using alpine only

---

## gld-10 | DOCKER_HOST
> When using DinD, set DOCKER_HOST to…

Type: fill-blank

```template
variables:
  DOCKER_HOST: {{BLANK_1}}
```

- BLANK_1: tcp://docker:2376 (hint: DinD service endpoint)

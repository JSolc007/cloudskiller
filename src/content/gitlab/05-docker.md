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

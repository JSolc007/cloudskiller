---
id: gl-environments
title: Environments
description: Deploy to environments, review apps, manual gates.
icon: 🌍
category: gitlab
---

## gle-1 | Environment
> Declare a deployment environment.

Type: fill-blank

```template
deploy_prod:
  script: ./deploy.sh
  {{BLANK_1}}:
    name: production
    url: https://app.example.com
```

- BLANK_1: environment (hint: Deployment target keyword)

---

## gle-2 | Review Apps
> Dynamic environment for merge requests.

Type: fill-blank

```template
deploy_review:
  environment:
    name: review/$CI_COMMIT_REF_SLUG
    {{BLANK_1}}: stop_review
```

- BLANK_1: on_stop (hint: Job to run when env is stopped)

---

## gle-3 | Stop Environment
> Action to tear down a review app.

Type: fill-blank

```template
stop_review:
  environment:
    name: review/$CI_COMMIT_REF_SLUG
    action: {{BLANK_1}}
  when: manual
```

- BLANK_1: stop (hint: Action to remove environment)

---

## gle-4 | Manual Deploy
> Require manual approval for production.

Type: fill-blank

```template
deploy_prod:
  stage: deploy
  when: {{BLANK_1}}
  environment: production
```

- BLANK_1: manual (hint: Requires button click)

---

## gle-5 | Protected Environments
> Protected environments restrict deploys to…

Type: select-option

```template
Protected environments only allow deploys by {{BLANK_1}}.
```

- BLANK_1: authorized users | authorized users, anyone, bots only, admins only

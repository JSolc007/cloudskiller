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

---

## gle-6 | Auto URL
> Use the environment URL for monitoring?

Type: select-option

```template
The environment URL enables {{BLANK_1}} directly in GitLab.
```

- BLANK_1: monitoring and link access | monitoring and link access, automatic deployment, CI caching, artifact storage

---

## gle-7 | Environment Scope
> Scope CI/CD variables to a specific environment?

Type: select-option

```template
Variables can be scoped to a specific {{BLANK_1}} for environment-based config.
```

- BLANK_1: environment | environment, branch, tag, user

---

## gle-8 | Deployment Tier
> Classify environments by tier.

Type: fill-blank

```template
environment:
  name: staging
  {{BLANK_1}}: staging
```

- BLANK_1: deployment_tier (hint: Environment classification)

---

## gle-9 | Auto Stop
> Automatically stop an environment after a time?

Type: fill-blank

```template
environment:
  name: review/$CI_COMMIT_REF_SLUG
  {{BLANK_1}}: 1 day
```

- BLANK_1: auto_stop_in (hint: Auto-cleanup duration)

---

## gle-10 | Rollback
> GitLab tracks deployment history for…

Type: select-option

```template
GitLab tracks deployment history per environment for {{BLANK_1}}.
```

- BLANK_1: rollback capability | rollback capability, billing, caching, testing

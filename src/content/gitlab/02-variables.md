---
id: gl-variables
title: Variables
description: CI/CD variables, predefined vars, masking, protection.
icon: 🔑
category: gitlab
---

## glv-1 | Define Variables
> Top-level variable definition.

Type: fill-blank

```template
{{BLANK_1}}:
  NODE_ENV: "production"
  APP_NAME: "my-app"
```

- BLANK_1: variables (hint: Key for pipeline variables)

---

## glv-2 | Use Variable
> How to reference a variable in script?

Type: fill-blank

```template
script:
  - echo "Deploying {{BLANK_1}}APP_NAME"
```

- BLANK_1: $ (hint: Variable prefix in shell)

---

## glv-3 | Commit SHA
> Predefined var for commit hash?

Type: fill-blank

```template
docker tag app:latest app:${{BLANK_1}}
```

- BLANK_1: CI_COMMIT_SHA (hint: Full commit hash variable)

---

## glv-4 | Branch Name
> Predefined var for current branch?

Type: fill-blank

```template
if: ${{BLANK_1}} == "main"
```

- BLANK_1: CI_COMMIT_BRANCH (hint: Branch name variable)

---

## glv-5 | Protected Variables
> Protected variables are only available on…

Type: select-option

```template
Protected variables are exposed only to {{BLANK_1}}.
```

- BLANK_1: protected branches/tags | protected branches/tags, all branches, main only, merge requests

---

## glv-6 | Masked Variables
> Masked variables are…

Type: select-option

```template
Masked variables are {{BLANK_1}} in job logs.
```

- BLANK_1: hidden | hidden, encrypted, deleted, compressed

---
id: tf-cloud
title: Terraform Cloud
description: Remote execution, Sentinel, VCS integration.
icon: ☁️
category: terraform
---

## tfc-1 | Execution Modes
> Default Terraform Cloud execution mode?

Type: select-option

```template
The default execution mode is {{BLANK_1}}.
```

- BLANK_1: remote | remote, local, agent, hybrid

---

## tfc-2 | Sentinel
> Sentinel is a…

Type: select-option

```template
Sentinel is a {{BLANK_1}} framework for Terraform.
```

- BLANK_1: policy-as-code | policy-as-code, testing, monitoring, deployment

---

## tfc-3 | Backend Config
> Configure Terraform Cloud backend.

Type: fill-blank

```template
terraform {
  cloud {
    organization = "my-org"
    workspaces {
      {{BLANK_1}} = "prod"
    }
  }
}
```

- BLANK_1: name (hint: Workspace identifier key)

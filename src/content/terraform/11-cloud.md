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

---

## tfc-4 | VCS Integration
> Terraform Cloud can trigger runs from…

Type: select-option

```template
Terraform Cloud can trigger runs from {{BLANK_1}} commits.
```

- BLANK_1: VCS (Git) | VCS (Git), email, manual only, scheduled

---

## tfc-5 | Run Phases
> The three phases of a Terraform Cloud run?

Type: select-option

```template
A run consists of plan, {{BLANK_1}}, and apply phases.
```

- BLANK_1: cost estimation & policy check | cost estimation & policy check, validate, test, review

---

## tfc-6 | API Token
> Authenticate CLI to Terraform Cloud?

Type: fill-blank

```template
terraform {{BLANK_1}}
```

- BLANK_1: login (hint: Authenticate to Terraform Cloud)

---

## tfc-7 | Variable Sets
> Share variables across multiple workspaces?

Type: select-option

```template
{{BLANK_1}} share variables across multiple workspaces.
```

- BLANK_1: Variable Sets | Variable Sets, Modules, Policies, Teams

---

## tfc-8 | Cost Estimation
> Terraform Cloud can estimate…

Type: select-option

```template
Terraform Cloud can estimate {{BLANK_1}} before apply.
```

- BLANK_1: infrastructure cost changes | infrastructure cost changes, performance impact, security risk, deployment time

---

## tfc-9 | Private Registry
> Terraform Cloud includes a…

Type: select-option

```template
Terraform Cloud includes a {{BLANK_1}} for modules and providers.
```

- BLANK_1: private registry | private registry, public marketplace, container registry, artifact store

---

## tfc-10 | Agent Pools
> Agents allow Terraform Cloud to manage resources in…

Type: select-option

```template
Terraform Cloud Agents can manage resources in {{BLANK_1}} networks.
```

- BLANK_1: private/isolated | private/isolated, public cloud only, SaaS only, multi-region

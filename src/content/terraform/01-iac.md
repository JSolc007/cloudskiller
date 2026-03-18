---
id: tf-iac
title: IaC Concepts
description: Infrastructure as Code fundamentals and Terraform benefits.
icon: 📜
category: terraform
---

## iac-1 | What is IaC?
> IaC manages infrastructure through…

Type: select-option

```template
IaC manages infrastructure using {{BLANK_1}} instead of manual processes.
```

- BLANK_1: code/configuration files | code/configuration files, GUI consoles, CLI commands, spreadsheets

---

## iac-2 | Declarative vs Imperative
> Terraform is…

Type: select-option

```template
Terraform uses a {{BLANK_1}} approach to infrastructure.
```

- BLANK_1: declarative | declarative, imperative, procedural, functional

---

## iac-3 | Idempotent
> Terraform is idempotent — applying twice…

Type: select-option

```template
Applying the same config twice results in {{BLANK_1}}.
```

- BLANK_1: no changes | no changes, duplicate resources, an error, a rollback

---

## iac-4 | HCL
> Terraform's config language is called…

Type: fill-blank

```template
Terraform uses {{BLANK_1}} (HashiCorp Configuration Language).
```

- BLANK_1: HCL (hint: 3-letter abbreviation)

---

## iac-5 | IaC Benefits
> Key benefit of IaC over manual provisioning?

Type: select-option

```template
IaC provides {{BLANK_1}} and reduces human error.
```

- BLANK_1: version control and reproducibility | version control and reproducibility, faster CPU speeds, lower cloud costs, unlimited resources

---

## iac-6 | Terraform vs CloudFormation
> Terraform is…

Type: select-option

```template
Unlike CloudFormation, Terraform is {{BLANK_1}}.
```

- BLANK_1: cloud-agnostic | cloud-agnostic, AWS-only, open-source only, GUI-based

---

## iac-7 | Desired State
> Terraform compares desired state with…

Type: select-option

```template
Terraform compares the desired state in config with the {{BLANK_1}}.
```

- BLANK_1: current state | current state, planned state, previous state, default state

---

## iac-8 | Terraform Registry
> The Terraform Registry hosts…

Type: select-option

```template
The Terraform Registry hosts {{BLANK_1}} and modules.
```

- BLANK_1: providers | providers, state files, variables, backends

---

## iac-9 | Plan Output
> terraform plan shows…

Type: select-option

```template
terraform plan shows resources to be {{BLANK_1}}.
```

- BLANK_1: added, changed, or destroyed | added, changed, or destroyed, only added, only destroyed, backed up

---

## iac-10 | Infrastructure Drift
> When real infra differs from config, it's called…

Type: select-option

```template
When actual infrastructure differs from the Terraform config, it is called {{BLANK_1}}.
```

- BLANK_1: drift | drift, conflict, divergence, mismatch

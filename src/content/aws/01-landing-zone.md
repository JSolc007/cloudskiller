---
id: aws-landing-zone
title: Landing Zone
description: AWS Organizations, Control Tower & multi-account strategy.
icon: 🏗️
category: aws
---

## lz-1 | AWS Organizations
> Which service manages multiple AWS accounts centrally?

Type: select-option

```template
The service for multi-account management is {{BLANK_1}}.
```

- BLANK_1: AWS Organizations | AWS Organizations, IAM, CloudFormation, Config

---

## lz-2 | SCPs
> What does SCP stand for?

Type: select-option

```template
SCP = {{BLANK_1}}
```

- BLANK_1: Service Control Policy | Service Control Policy, Security Config Protocol, System Control Parameter, Service Config Policy

---

## lz-3 | Control Tower
> Which service automates landing zone setup?

Type: select-option

```template
To set up a multi-account landing zone, use {{BLANK_1}}.
```

- BLANK_1: AWS Control Tower | AWS Control Tower, CloudFormation, Service Catalog, AWS Config

---

## lz-4 | Guardrails
> Control Tower guardrails are implemented using?

Type: select-option

```template
Preventive guardrails use {{BLANK_1}}, detective guardrails use AWS Config.
```

- BLANK_1: SCPs | SCPs, IAM Policies, NACLs, WAF Rules

---

## lz-5 | OU Structure
> Fill in the common OU names.

Type: fill-blank

```template
Organizational Units:
  - {{BLANK_1}}    # shared logging & audit
  - Production
  - {{BLANK_2}}    # non-prod workloads
  - Sandbox
```

- BLANK_1: Security (hint: OU for security/audit accounts)
- BLANK_2: Development (hint: OU for dev/staging)

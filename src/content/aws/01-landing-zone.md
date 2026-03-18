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

---

## lz-6 | Management Account
> The account that creates the organization is called the…

Type: select-option

```template
The account that creates an AWS Organization is the {{BLANK_1}}.
```

- BLANK_1: management account | management account, root account, billing account, admin account

---

## lz-7 | Consolidated Billing
> AWS Organizations provides…

Type: select-option

```template
AWS Organizations provides {{BLANK_1}} across all member accounts.
```

- BLANK_1: consolidated billing | consolidated billing, separate billing, usage caps, free tier sharing

---

## lz-8 | SCP Inheritance
> SCPs applied to a parent OU…

Type: select-option

```template
SCPs on a parent OU are {{BLANK_1}} by child OUs and accounts.
```

- BLANK_1: inherited | inherited, ignored, overridden, duplicated

---

## lz-9 | Account Factory
> Control Tower's Account Factory is used to…

Type: select-option

```template
Account Factory is used to {{BLANK_1}} new AWS accounts.
```

- BLANK_1: provision standardized | provision standardized, delete, audit, encrypt

---

## lz-10 | Log Archive Account
> The Log Archive account stores…

Type: select-option

```template
The Log Archive account centralizes {{BLANK_1}} from all accounts.
```

- BLANK_1: CloudTrail and Config logs | CloudTrail and Config logs, EC2 instances, S3 data, IAM users

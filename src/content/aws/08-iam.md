---
id: aws-iam
title: IAM & Security
description: IAM policies, roles, federation, KMS, Secrets Manager.
icon: 🔐
category: aws
---

## iam-1 | Policy Evaluation
> Explicit Deny always…

Type: select-option

```template
In IAM, an explicit Deny always {{BLANK_1}}.
```

- BLANK_1: wins over Allow | wins over Allow, is ignored, requires MFA, logs an event

---

## iam-2 | AssumeRole
> To switch roles, you call…

Type: fill-blank

```template
aws sts {{BLANK_1}} --role-arn arn:aws:iam::123:role/Admin
```

- BLANK_1: assume-role (hint: STS API to assume a role)

---

## iam-3 | Instance Profile
> EC2 gets IAM credentials via…

Type: select-option

```template
EC2 instances receive IAM credentials through an {{BLANK_1}}.
```

- BLANK_1: Instance Profile | Instance Profile, Access Key, User Data, Security Group

---

## iam-4 | KMS
> KMS manages…

Type: select-option

```template
AWS KMS manages {{BLANK_1}} for encryption.
```

- BLANK_1: encryption keys | encryption keys, SSL certificates, SSH keys, API keys

---

## iam-5 | Secrets Manager
> Secrets Manager can auto-rotate secrets for…

Type: select-option

```template
Secrets Manager natively auto-rotates credentials for {{BLANK_1}}.
```

- BLANK_1: RDS | RDS, S3, EC2, Lambda

---

## iam-6 | Permission Boundary
> Permission boundaries limit…

Type: select-option

```template
Permission boundaries set the {{BLANK_1}} permissions an entity can have.
```

- BLANK_1: maximum | maximum, minimum, default, temporary

---

## iam-7 | Policy Structure
> The three main elements of an IAM policy statement?

Type: select-option

```template
An IAM policy statement contains Effect, Action, and {{BLANK_1}}.
```

- BLANK_1: Resource | Resource, Principal, Condition, Version

---

## iam-8 | MFA Delete
> MFA Delete protects against accidental…

Type: select-option

```template
MFA Delete requires MFA to {{BLANK_1}} S3 object versions.
```

- BLANK_1: permanently delete | permanently delete, create, read, encrypt

---

## iam-9 | Cross-Account Access
> Cross-account access is best achieved with…

Type: select-option

```template
For cross-account access, use IAM {{BLANK_1}}.
```

- BLANK_1: roles | roles, users, groups, policies

---

## iam-10 | AWS SSO
> AWS IAM Identity Center (formerly SSO) provides…

Type: select-option

```template
IAM Identity Center provides {{BLANK_1}} across multiple AWS accounts.
```

- BLANK_1: single sign-on | single sign-on, MFA only, encryption, auditing

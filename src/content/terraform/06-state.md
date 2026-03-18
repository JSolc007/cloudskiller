---
id: tf-state
title: State Management
description: Local/remote state, locking, import, and state commands.
icon: 📦
category: terraform
---

## st-1 | State Purpose
> State maps config to…

Type: select-option

```template
Terraform state maps configuration to {{BLANK_1}}.
```

- BLANK_1: real-world resources | real-world resources, provider APIs, local files, git repos

---

## st-2 | Default State File
> Default state file name?

Type: fill-blank

```template
Default state is stored in {{BLANK_1}}.
```

- BLANK_1: terraform.tfstate (hint: terraform.____)

---

## st-3 | Remote Backend
> Configure S3 backend.

Type: fill-blank

```template
backend "{{BLANK_1}}" {
  bucket = "my-state"
  key    = "prod/terraform.tfstate"
}
```

- BLANK_1: s3 (hint: AWS storage service)

---

## st-4 | State Locking
> S3 backend uses which service for locking?

Type: select-option

```template
S3 backend uses {{BLANK_1}} for state locking.
```

- BLANK_1: DynamoDB | DynamoDB, S3 locks, Redis, CloudWatch

---

## st-5 | State List
> Command to list resources in state?

Type: fill-blank

```template
terraform state {{BLANK_1}}
```

- BLANK_1: list (hint: List all tracked resources)

---

## st-6 | Import
> Command to import existing infra?

Type: fill-blank

```template
terraform {{BLANK_1}} aws_instance.web i-1234567890
```

- BLANK_1: import (hint: Bring existing resources into state)

---

## st-7 | State Move
> Rename a resource in state?

Type: fill-blank

```template
terraform state {{BLANK_1}} aws_instance.old aws_instance.new
```

- BLANK_1: mv (hint: Move/rename command)

---

## st-8 | State Remove
> Remove a resource from state without destroying it?

Type: fill-blank

```template
terraform state {{BLANK_1}} aws_instance.old
```

- BLANK_1: rm (hint: Remove from state)

---

## st-9 | Sensitive Data in State
> State files may contain…

Type: select-option

```template
Terraform state may contain {{BLANK_1}} in plain text.
```

- BLANK_1: sensitive data | sensitive data, encrypted secrets, hashed values, nothing sensitive

---

## st-10 | Force Unlock
> Force-release a stuck state lock?

Type: fill-blank

```template
terraform force-{{BLANK_1}} <LOCK_ID>
```

- BLANK_1: unlock (hint: Release stuck lock)

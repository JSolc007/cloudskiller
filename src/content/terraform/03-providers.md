---
id: tf-providers
title: Providers
description: Configure and manage Terraform providers.
icon: 🔌
category: terraform
---

## prov-1 | Provider Source
> AWS provider source in the registry?

Type: fill-blank

```template
required_providers {
  aws = {
    source = "{{BLANK_1}}"
  }
}
```

- BLANK_1: hashicorp/aws (hint: namespace/provider)

---

## prov-2 | Version Constraint
> ~> 5.0 means…

Type: select-option

```template
version "~> 5.0" allows {{BLANK_1}}.
```

- BLANK_1: >= 5.0, < 6.0 | >= 5.0, < 6.0, exactly 5.0, > 5.0, any version

---

## prov-3 | Provider Alias
> Multiple providers need an…

Type: fill-blank

```template
provider "aws" {
  {{BLANK_1}} = "eu"
  region = "eu-west-1"
}
```

- BLANK_1: alias (hint: Keyword for alternate provider config)

---

## prov-4 | Lock File
> Provider versions are locked in…

Type: fill-blank

```template
Provider hashes are stored in {{BLANK_1}}.
```

- BLANK_1: .terraform.lock.hcl (hint: Hidden lock file name)

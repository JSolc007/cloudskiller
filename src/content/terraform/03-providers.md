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

---

## prov-5 | Required Version
> Constrain Terraform CLI version?

Type: fill-blank

```template
terraform {
  {{BLANK_1}} = ">= 1.5.0"
}
```

- BLANK_1: required_version (hint: CLI version constraint key)

---

## prov-6 | Provider Block
> Fill in the provider block.

Type: fill-blank

```template
{{BLANK_1}} "aws" {
  region = "us-east-1"
}
```

- BLANK_1: provider (hint: Block type for provider config)

---

## prov-7 | Multiple Providers
> Reference an aliased provider in a resource?

Type: fill-blank

```template
resource "aws_instance" "eu_web" {
  {{BLANK_1}} = aws.eu
  ami           = "ami-12345"
  instance_type = "t3.micro"
}
```

- BLANK_1: provider (hint: Meta-argument for provider selection)

---

## prov-8 | Provider Installation
> Providers are downloaded to which directory?

Type: fill-blank

```template
Providers are installed in the {{BLANK_1}} directory.
```

- BLANK_1: .terraform (hint: Hidden directory in working dir)

---

## prov-9 | Exact Version
> Pin to an exact provider version?

Type: fill-blank

```template
version = "{{BLANK_1}} 5.0.0"
```

- BLANK_1: = (hint: Exact version operator)

---

## prov-10 | Provider Tiers
> Official providers are maintained by…

Type: select-option

```template
Official Terraform providers are maintained by {{BLANK_1}}.
```

- BLANK_1: HashiCorp | HashiCorp, the community, cloud vendors, third parties

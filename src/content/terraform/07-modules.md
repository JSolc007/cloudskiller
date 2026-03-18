---
id: tf-modules
title: Modules
description: Create, use, and publish reusable modules.
icon: 🧩
category: terraform
---

## mod-1 | Module Block
> Call a module.

Type: fill-blank

```template
{{BLANK_1}} "vpc" {
  source = "./modules/vpc"
  cidr   = "10.0.0.0/16"
}
```

- BLANK_1: module (hint: Block type for calling modules)

---

## mod-2 | Registry Module
> Registry source format?

Type: fill-blank

```template
source = "{{BLANK_1}}/vpc/aws"
```

- BLANK_1: terraform-aws-modules (hint: Official module namespace)

---

## mod-3 | Module Output
> Reference a module's output?

Type: fill-blank

```template
vpc_id = {{BLANK_1}}.vpc.vpc_id
```

- BLANK_1: module (hint: Prefix for module outputs)

---

## mod-4 | Child Module
> A called module is called a…

Type: select-option

```template
A module called by another is a {{BLANK_1}} module.
```

- BLANK_1: child | child, parent, root, nested

---

## mod-5 | Root Module
> The top-level config is the…

Type: select-option

```template
The working directory config is the {{BLANK_1}} module.
```

- BLANK_1: root | root, main, parent, base

---

## mod-6 | Module Version
> Pin a registry module version?

Type: fill-blank

```template
module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  {{BLANK_1}} = "5.0.0"
}
```

- BLANK_1: version (hint: Version constraint key)

---

## mod-7 | Module Structure
> What are the three recommended files in a module?

Type: select-option

```template
A module should have main.tf, variables.tf, and {{BLANK_1}}.
```

- BLANK_1: outputs.tf | outputs.tf, providers.tf, backend.tf, data.tf

---

## mod-8 | Private Registry
> Terraform Cloud hosts a…

Type: select-option

```template
Terraform Cloud includes a {{BLANK_1}} module registry.
```

- BLANK_1: private | private, public, shared, cached

---

## mod-9 | Module Sources
> Valid module sources include local paths and…

Type: select-option

```template
Module sources include local, registry, GitHub, S3, and {{BLANK_1}}.
```

- BLANK_1: GCS buckets | GCS buckets, Docker images, NPM packages, Helm charts

---

## mod-10 | Module Init
> After adding a module, you must run…

Type: fill-blank

```template
terraform {{BLANK_1}}
```

- BLANK_1: init (hint: Download module source)

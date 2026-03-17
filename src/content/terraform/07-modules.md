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

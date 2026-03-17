---
id: tf-variables
title: Variables & Outputs
description: Input variables, locals, outputs, and tfvars.
icon: 📋
category: terraform
---

## var-1 | Variable Block
> Declare a variable.

Type: fill-blank

```template
{{BLANK_1}} "region" {
  type    = string
  default = "us-east-1"
}
```

- BLANK_1: variable (hint: Block type for inputs)

---

## var-2 | Reference Variable
> How to use a variable?

Type: fill-blank

```template
region = {{BLANK_1}}.region
```

- BLANK_1: var (hint: Prefix for variable references)

---

## var-3 | Variable Types
> Which type is for key-value pairs?

Type: select-option

```template
type = {{BLANK_1}}
```

- BLANK_1: map(string) | map(string), list(string), object, set(string)

---

## var-4 | Locals
> How to reference a local value?

Type: fill-blank

```template
tags = {{BLANK_1}}.common_tags
```

- BLANK_1: local (hint: Prefix for local values)

---

## var-5 | Output
> Define an output value.

Type: fill-blank

```template
{{BLANK_1}} "vpc_id" {
  value = aws_vpc.main.id
}
```

- BLANK_1: output (hint: Block type for exports)

---

## var-6 | Sensitive Output
> Hide output from CLI display?

Type: fill-blank

```template
output "password" {
  value     = var.db_password
  {{BLANK_1}} = true
}
```

- BLANK_1: sensitive (hint: Flag to mask output)

---

## var-7 | tfvars
> Variable values file extension?

Type: fill-blank

```template
# File: production.{{BLANK_1}}
region = "eu-west-1"
```

- BLANK_1: tfvars (hint: Variable values file extension)

---

## var-8 | Env Var Override
> Environment variable prefix for Terraform?

Type: fill-blank

```template
export {{BLANK_1}}_region="eu-west-1"
```

- BLANK_1: TF_VAR (hint: Prefix for env var overrides)

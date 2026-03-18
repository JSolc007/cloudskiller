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

---

## var-9 | Variable Precedence
> Which has highest precedence: env var, tfvars, or CLI flag?

Type: select-option

```template
The {{BLANK_1}} has the highest variable precedence.
```

- BLANK_1: -var CLI flag | -var CLI flag, environment variable, terraform.tfvars, default value

---

## var-10 | Validation
> Add custom validation to a variable?

Type: fill-blank

```template
variable "env" {
  type = string
  {{BLANK_1}} {
    condition     = contains(["dev", "prod"], var.env)
    error_message = "Must be dev or prod."
  }
}
```

- BLANK_1: validation (hint: Block for custom rules)

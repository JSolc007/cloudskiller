---
id: tf-expressions
title: Expressions & Functions
description: for_each, count, built-in functions, conditionals.
icon: 🔧
category: terraform
---

## exp-1 | Count
> Create 3 instances with count.

Type: fill-blank

```template
resource "aws_instance" "web" {
  {{BLANK_1}} = 3
  ami           = var.ami
  instance_type = "t3.micro"
}
```

- BLANK_1: count (hint: Meta-argument for multiple resources)

---

## exp-2 | for_each
> Iterate over a map.

Type: fill-blank

```template
resource "aws_subnet" "this" {
  {{BLANK_1}} = var.subnets
  cidr_block = each.value
}
```

- BLANK_1: for_each (hint: Meta-argument for map iteration)

---

## exp-3 | each.key
> In for_each, the map key is…

Type: fill-blank

```template
tags = { Name = {{BLANK_1}}.key }
```

- BLANK_1: each (hint: Iterator object in for_each)

---

## exp-4 | Conditional
> Terraform ternary syntax?

Type: fill-blank

```template
instance_type = var.env == "prod" {{BLANK_1}} "m5.large" : "t3.micro"
```

- BLANK_1: ? (hint: Ternary operator)

---

## exp-5 | join function
> Join list elements into a string?

Type: fill-blank

```template
value = {{BLANK_1}}(",", var.subnets)
```

- BLANK_1: join (hint: String join function)

---

## exp-6 | lookup function
> Get value from a map with default?

Type: fill-blank

```template
ami = {{BLANK_1}}(var.amis, var.region, "ami-default")
```

- BLANK_1: lookup (hint: Map lookup function)

---

## exp-7 | length function
> Get the number of items in a list?

Type: fill-blank

```template
count = {{BLANK_1}}(var.subnets)
```

- BLANK_1: length (hint: List/map size function)

---

## exp-8 | for Expression
> Transform a list with for?

Type: fill-blank

```template
upper_names = [{{BLANK_1}} n in var.names : upper(n)]
```

- BLANK_1: for (hint: Iteration keyword)

---

## exp-9 | Splat Expression
> Get all IDs from a list of resources?

Type: fill-blank

```template
ids = aws_instance.web[{{BLANK_1}}].id
```

- BLANK_1: * (hint: Splat operator)

---

## exp-10 | Dynamic Blocks
> Generate repeated blocks dynamically?

Type: fill-blank

```template
{{BLANK_1}} "ingress" {
  for_each = var.ingress_rules
  content {
    from_port = ingress.value.port
    to_port   = ingress.value.port
    protocol  = "tcp"
  }
}
```

- BLANK_1: dynamic (hint: Generate nested blocks)

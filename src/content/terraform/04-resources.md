---
id: tf-resources
title: Resources & Data
description: Resource blocks, data sources, and references.
icon: 🧱
category: terraform
---

## res-1 | Resource Syntax
> Fill in the resource block.

Type: fill-blank

```template
{{BLANK_1}} "aws_instance" "web" {
  ami           = "ami-12345"
  instance_type = "t3.micro"
}
```

- BLANK_1: resource (hint: Block type for creating infra)

---

## res-2 | Data Source
> Fill in the data source block.

Type: fill-blank

```template
{{BLANK_1}} "aws_ami" "latest" {
  most_recent = true
  owners      = ["amazon"]
}
```

- BLANK_1: data (hint: Block type for querying existing infra)

---

## res-3 | Resource Reference
> How to reference the VPC id?

Type: fill-blank

```template
subnet_id = {{BLANK_1}}.main.id
```

- BLANK_1: aws_vpc (hint: resource_type.resource_name.attribute)

---

## res-4 | Data Reference
> How to reference a data source?

Type: fill-blank

```template
ami = {{BLANK_1}}.aws_ami.latest.id
```

- BLANK_1: data (hint: Prefix for data source references)

---

## res-5 | Depends On
> Explicit dependency keyword?

Type: fill-blank

```template
{{BLANK_1}} = [aws_db_instance.main]
```

- BLANK_1: depends_on (hint: Meta-argument for explicit deps)

---

## res-6 | Resource Address
> Full address of a resource in module root?

Type: fill-blank

```template
# Address: {{BLANK_1}}.web
```

- BLANK_1: aws_instance (hint: type.name format)

---

## res-7 | Terraform ID
> Each resource has a unique…

Type: select-option

```template
Terraform tracks each resource by its {{BLANK_1}} in the state.
```

- BLANK_1: resource address | resource address, ARN, UUID, hash

---

## res-8 | Local-Only Resources
> terraform_data is used for…

Type: select-option

```template
The terraform_data resource stores {{BLANK_1}} without a cloud API.
```

- BLANK_1: arbitrary values in state | arbitrary values in state, provider configs, module outputs, variable defaults

---

## res-9 | Timeouts
> Custom timeouts for resource creation?

Type: fill-blank

```template
resource "aws_db_instance" "main" {
  timeouts {
    {{BLANK_1}} = "60m"
  }
}
```

- BLANK_1: create (hint: Timeout for resource creation)

---

## res-10 | Replace
> Force resource recreation?

Type: fill-blank

```template
terraform apply -{{BLANK_1}}="aws_instance.web"
```

- BLANK_1: replace (hint: Force recreate a resource)

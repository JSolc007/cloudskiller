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

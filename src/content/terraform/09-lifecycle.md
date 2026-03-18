---
id: tf-lifecycle
title: Lifecycle Rules
description: prevent_destroy, create_before_destroy, ignore_changes.
icon: 🔄
category: terraform
---

## lf-1 | Prevent Destroy
> Block accidental deletion.

Type: fill-blank

```template
lifecycle {
  {{BLANK_1}} = true
}
```

- BLANK_1: prevent_destroy (hint: Stop terraform destroy)

---

## lf-2 | Create Before Destroy
> Zero-downtime replacement.

Type: fill-blank

```template
lifecycle {
  {{BLANK_1}} = true
}
```

- BLANK_1: create_before_destroy (hint: New resource before old is deleted)

---

## lf-3 | Ignore Changes
> Ignore tag changes.

Type: fill-blank

```template
lifecycle {
  {{BLANK_1}} = [tags]
}
```

- BLANK_1: ignore_changes (hint: Skip drift for specific attributes)

---

## lf-4 | Provisioners
> Provisioners are a…

Type: select-option

```template
HashiCorp considers provisioners a {{BLANK_1}}.
```

- BLANK_1: last resort | last resort, best practice, requirement, default

---

## lf-5 | local-exec
> local-exec runs commands on the…

Type: select-option

```template
The local-exec provisioner runs commands on the {{BLANK_1}}.
```

- BLANK_1: machine running Terraform | machine running Terraform, remote resource, cloud API, Terraform Cloud

---

## lf-6 | remote-exec
> remote-exec runs commands on the…

Type: select-option

```template
The remote-exec provisioner runs commands on the {{BLANK_1}}.
```

- BLANK_1: created resource | created resource, local machine, Terraform Cloud, CI/CD runner

---

## lf-7 | Replace Triggered By
> Trigger replacement when another resource changes?

Type: fill-blank

```template
lifecycle {
  {{BLANK_1}} = [aws_ami.latest.id]
}
```

- BLANK_1: replace_triggered_by (hint: Force replace on dependency change)

---

## lf-8 | Null Resource
> null_resource is commonly used with…

Type: select-option

```template
null_resource is commonly used with {{BLANK_1}} to run arbitrary commands.
```

- BLANK_1: provisioners | provisioners, modules, variables, outputs

---

## lf-9 | Moved Block
> Refactor resource names without destroying?

Type: fill-blank

```template
{{BLANK_1}} {
  from = aws_instance.old
  to   = aws_instance.new
}
```

- BLANK_1: moved (hint: Block for resource rename)

---

## lf-10 | Precondition
> Validate assumptions before creating a resource?

Type: fill-blank

```template
lifecycle {
  {{BLANK_1}} {
    condition     = var.env != ""
    error_message = "env must not be empty"
  }
}
```

- BLANK_1: precondition (hint: Pre-creation validation)

---
id: tf-cli
title: CLI Workflow
description: init, plan, apply, destroy — the core workflow.
icon: ⌨️
category: terraform
---

## cli-1 | First Command
> Which command downloads providers?

Type: fill-blank

```template
terraform {{BLANK_1}}
```

- BLANK_1: init (hint: Initialize a working directory)

---

## cli-2 | Preview Changes
> Which command shows what will change?

Type: fill-blank

```template
terraform {{BLANK_1}}
```

- BLANK_1: plan (hint: Preview without applying)

---

## cli-3 | Apply Changes
> Which command creates/updates resources?

Type: fill-blank

```template
terraform {{BLANK_1}} -auto-approve
```

- BLANK_1: apply (hint: Execute the plan)

---

## cli-4 | Destroy
> Which command tears down all resources?

Type: fill-blank

```template
terraform {{BLANK_1}}
```

- BLANK_1: destroy (hint: Remove all managed resources)

---

## cli-5 | Format Code
> Which command auto-formats .tf files?

Type: fill-blank

```template
terraform {{BLANK_1}}
```

- BLANK_1: fmt (hint: Format command)

---

## cli-6 | Validate
> Which command checks syntax?

Type: fill-blank

```template
terraform {{BLANK_1}}
```

- BLANK_1: validate (hint: Check config validity)

---

## cli-7 | Output
> View all outputs after apply?

Type: fill-blank

```template
terraform {{BLANK_1}}
```

- BLANK_1: output (hint: Display output values)

---

## cli-8 | Refresh
> Sync state with real infrastructure?

Type: fill-blank

```template
terraform apply -{{BLANK_1}}-only
```

- BLANK_1: refresh (hint: Update state without changes)

---

## cli-9 | Target
> Apply changes to a specific resource only?

Type: fill-blank

```template
terraform apply -{{BLANK_1}}=aws_instance.web
```

- BLANK_1: target (hint: Limit to one resource)

---

## cli-10 | Plan File
> Save a plan to a file for later apply?

Type: fill-blank

```template
terraform plan -out={{BLANK_1}}
```

- BLANK_1: tfplan (hint: Common plan file name)

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

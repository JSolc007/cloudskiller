---
id: tf-workspaces
title: Workspaces
description: Manage multiple environments with workspaces.
icon: 🏢
category: terraform
---

## ws-1 | Default Workspace
> Default workspace name?

Type: fill-blank

```template
The default workspace is called "{{BLANK_1}}".
```

- BLANK_1: default (hint: Name of the initial workspace)

---

## ws-2 | New Workspace
> Create a workspace.

Type: fill-blank

```template
terraform workspace {{BLANK_1}} staging
```

- BLANK_1: new (hint: Subcommand to create workspace)

---

## ws-3 | Current Workspace
> Reference current workspace in config?

Type: fill-blank

```template
tags = { Env = terraform.{{BLANK_1}} }
```

- BLANK_1: workspace (hint: Built-in reference to current workspace)

---

## ws-4 | Select Workspace
> Switch to an existing workspace.

Type: fill-blank

```template
terraform workspace {{BLANK_1}} production
```

- BLANK_1: select (hint: Switch command)

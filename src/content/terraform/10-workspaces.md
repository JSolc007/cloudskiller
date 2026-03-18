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

---

## ws-5 | List Workspaces
> List all workspaces?

Type: fill-blank

```template
terraform workspace {{BLANK_1}}
```

- BLANK_1: list (hint: Show all workspaces)

---

## ws-6 | Show Workspace
> Show current workspace?

Type: fill-blank

```template
terraform workspace {{BLANK_1}}
```

- BLANK_1: show (hint: Display current workspace name)

---

## ws-7 | Delete Workspace
> Delete a workspace?

Type: fill-blank

```template
terraform workspace {{BLANK_1}} staging
```

- BLANK_1: delete (hint: Remove a workspace)

---

## ws-8 | Workspace State
> Each workspace has its own…

Type: select-option

```template
Each workspace has its own {{BLANK_1}}.
```

- BLANK_1: state file | state file, provider config, variable file, module cache

---

## ws-9 | Workspace Use Case
> Workspaces are best for…

Type: select-option

```template
Workspaces are best suited for {{BLANK_1}} with the same config.
```

- BLANK_1: parallel environments | parallel environments, different projects, separate teams, multi-cloud

---

## ws-10 | Workspace Limitations
> Workspaces should NOT replace…

Type: select-option

```template
Workspaces are not a substitute for {{BLANK_1}} separation.
```

- BLANK_1: separate repo/config | separate repo/config, state locking, variable files, provider configs

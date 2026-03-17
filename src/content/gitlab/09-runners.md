---
id: gl-runners
title: Runners
description: Shared, group, project runners and tags.
icon: 🏃
category: gitlab
---

## glrun-1 | Runner Types
> Runner available to all projects?

Type: select-option

```template
A runner available to all projects is a {{BLANK_1}} runner.
```

- BLANK_1: shared | shared, group, project, global

---

## glrun-2 | Tags
> Assign a job to specific runners.

Type: fill-blank

```template
build_job:
  {{BLANK_1}}:
    - docker
    - linux
```

- BLANK_1: tags (hint: Runner selector keyword)

---

## glrun-3 | Executors
> Most common runner executor?

Type: select-option

```template
The most common executor is {{BLANK_1}}.
```

- BLANK_1: Docker | Docker, Shell, SSH, VirtualBox

---

## glrun-4 | Register Runner
> Command to register a new runner?

Type: fill-blank

```template
gitlab-runner {{BLANK_1}}
```

- BLANK_1: register (hint: Registration subcommand)

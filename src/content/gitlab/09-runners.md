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

---

## glrun-5 | Runner Token
> Runner authentication requires a…

Type: select-option

```template
Runners authenticate using a {{BLANK_1}}.
```

- BLANK_1: registration token | registration token, SSH key, API key, password

---

## glrun-6 | Group Runner
> A group runner is available to…

Type: select-option

```template
A group runner is available to {{BLANK_1}}.
```

- BLANK_1: all projects in a group | all projects in a group, one project, all groups, all instances

---

## glrun-7 | Runner Config
> Runner configuration file?

Type: fill-blank

```template
# Runner config is stored in:
{{BLANK_1}}
```

- BLANK_1: config.toml (hint: TOML configuration file)

---

## glrun-8 | Concurrent Jobs
> Set max concurrent jobs per runner?

Type: fill-blank

```template
# In config.toml:
{{BLANK_1}} = 4
```

- BLANK_1: concurrent (hint: Max parallel jobs setting)

---

## glrun-9 | Locked Runner
> A locked runner is restricted to…

Type: select-option

```template
A locked runner is restricted to {{BLANK_1}}.
```

- BLANK_1: its assigned project | its assigned project, the admin, shared projects, protected branches

---

## glrun-10 | Runner Status
> Check if a runner is online?

Type: select-option

```template
Runner status can be checked in the {{BLANK_1}} section of project settings.
```

- BLANK_1: CI/CD Runners | CI/CD Runners, General, Repository, Deploy Keys

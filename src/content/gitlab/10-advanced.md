---
id: gl-advanced
title: Advanced Pipelines
description: Multi-project, child pipelines, DAG, parallel.
icon: 🔗
category: gitlab
---

## gladv-1 | Trigger Downstream
> Trigger another project's pipeline.

Type: fill-blank

```template
deploy_downstream:
  {{BLANK_1}}:
    project: my-group/deploy
    branch: main
```

- BLANK_1: trigger (hint: Cross-project trigger keyword)

---

## gladv-2 | Child Pipeline
> Generate and trigger a child pipeline.

Type: fill-blank

```template
trigger_child:
  trigger:
    {{BLANK_1}}: generated-pipeline.yml
    strategy: depend
```

- BLANK_1: include (hint: Key for child config file)

---

## gladv-3 | DAG
> needs keyword creates a…

Type: select-option

```template
The "needs" keyword creates a {{BLANK_1}} (Directed Acyclic Graph).
```

- BLANK_1: DAG | DAG, queue, matrix, tree

---

## gladv-4 | Parallel
> Run a job in parallel instances.

Type: fill-blank

```template
test_job:
  {{BLANK_1}}: 4
  script:
    - npm test -- --shard=$CI_NODE_INDEX/$CI_NODE_TOTAL
```

- BLANK_1: parallel (hint: Keyword for parallel job instances)

---

## gladv-5 | Matrix
> Matrix builds create jobs for each combination.

Type: fill-blank

```template
test_job:
  parallel:
    {{BLANK_1}}:
      - NODE_VERSION: ["16", "18", "20"]
```

- BLANK_1: matrix (hint: Keyword for variable combinations)

---

## gladv-6 | Resource Group
> Prevent concurrent deploys?

Type: fill-blank

```template
deploy_prod:
  {{BLANK_1}}: production
  script: ./deploy.sh
```

- BLANK_1: resource_group (hint: Mutual exclusion keyword)

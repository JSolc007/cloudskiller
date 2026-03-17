---
id: aws-ecs
title: ECS & Containers
description: ECS tasks, services, Fargate, ECR.
icon: 🐳
category: aws
---

## ecs-1 | ECS Launch Types
> Which launch type is serverless?

Type: select-option

```template
The serverless ECS launch type is {{BLANK_1}}.
```

- BLANK_1: Fargate | Fargate, EC2, Lambda, EKS

---

## ecs-2 | Task Definition
> A Task Definition is like a…

Type: select-option

```template
A Task Definition is a {{BLANK_1}} for containers.
```

- BLANK_1: blueprint | blueprint, runtime, cluster, service

---

## ecs-3 | ECR
> Where do you store Docker images in AWS?

Type: select-option

```template
AWS container image registry: {{BLANK_1}}
```

- BLANK_1: ECR | ECR, ECS, S3, CodeArtifact

---

## ecs-4 | Service vs Task
> An ECS Service maintains…

Type: select-option

```template
An ECS Service maintains a {{BLANK_1}} of running tasks.
```

- BLANK_1: desired count | desired count, single instance, maximum limit, minimum threshold

---

## ecs-5 | Task Role
> Which role do containers use to call AWS APIs?

Type: select-option

```template
Containers use the {{BLANK_1}} to access AWS services.
```

- BLANK_1: Task Role | Task Role, Execution Role, Service Role, Instance Profile

---

## ecs-6 | Execution Role
> The Execution Role is used to…

Type: select-option

```template
The ECS Execution Role is used to {{BLANK_1}}.
```

- BLANK_1: pull images and write logs | pull images and write logs, call application APIs, manage load balancers, scale services

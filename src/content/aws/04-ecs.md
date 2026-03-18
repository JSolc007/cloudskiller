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

---

## ecs-7 | ECS vs EKS
> EKS runs which orchestrator?

Type: select-option

```template
EKS is a managed {{BLANK_1}} service.
```

- BLANK_1: Kubernetes | Kubernetes, Docker Swarm, ECS, Nomad

---

## ecs-8 | Task Placement
> Fargate tasks do NOT require…

Type: select-option

```template
With Fargate, you do NOT manage {{BLANK_1}}.
```

- BLANK_1: EC2 instances | EC2 instances, task definitions, IAM roles, container images

---

## ecs-9 | ALB Integration
> ECS integrates with ALB using…

Type: select-option

```template
ECS uses {{BLANK_1}} to register tasks with an ALB.
```

- BLANK_1: dynamic port mapping | dynamic port mapping, static IPs, DNS records, VPC peering

---

## ecs-10 | Capacity Providers
> Capacity providers manage…

Type: select-option

```template
ECS Capacity Providers manage the {{BLANK_1}} for your tasks.
```

- BLANK_1: infrastructure scaling | infrastructure scaling, IAM permissions, network routing, log storage

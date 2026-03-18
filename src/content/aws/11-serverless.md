---
id: aws-serverless
title: Serverless
description: Lambda, API Gateway, Step Functions, SQS, SNS.
icon: λ
category: aws
---

## sls-1 | Lambda Timeout
> Max Lambda timeout?

Type: select-option

```template
Lambda functions can run for up to {{BLANK_1}} minutes.
```

- BLANK_1: 15 | 15, 5, 30, 60

---

## sls-2 | Lambda Memory
> Lambda memory range?

Type: select-option

```template
Lambda memory ranges from 128 MB to {{BLANK_1}} MB.
```

- BLANK_1: 10240 | 10240, 3008, 4096, 8192

---

## sls-3 | API Gateway Types
> For WebSocket APIs, use…

Type: select-option

```template
API Gateway {{BLANK_1}} supports WebSocket connections.
```

- BLANK_1: V2 (HTTP API) | V2 (HTTP API), V1 (REST API), Both, Neither

---

## sls-4 | SQS Types
> FIFO queues guarantee…

Type: select-option

```template
SQS FIFO queues guarantee {{BLANK_1}} processing.
```

- BLANK_1: exactly-once ordered | exactly-once ordered, at-least-once, at-most-once, best-effort

---

## sls-5 | Step Functions
> Step Functions orchestrate…

Type: select-option

```template
Step Functions orchestrate {{BLANK_1}} as visual workflows.
```

- BLANK_1: distributed applications | distributed applications, EC2 instances, databases, networks

---

## sls-6 | Dead Letter Queue
> A DLQ catches messages that…

Type: select-option

```template
A Dead Letter Queue receives messages that {{BLANK_1}}.
```

- BLANK_1: failed processing | failed processing, are too large, expire, are duplicated

---

## sls-7 | Lambda Layers
> Lambda Layers are used to…

Type: select-option

```template
Lambda Layers allow you to {{BLANK_1}} across multiple functions.
```

- BLANK_1: share libraries and code | share libraries and code, increase memory, reduce cost, manage VPCs

---

## sls-8 | SQS Visibility Timeout
> SQS visibility timeout prevents…

Type: select-option

```template
Visibility timeout prevents other consumers from {{BLANK_1}} a message being processed.
```

- BLANK_1: receiving | receiving, deleting, reading, encrypting

---

## sls-9 | SNS
> SNS is a…

Type: select-option

```template
SNS is a {{BLANK_1}} messaging service.
```

- BLANK_1: pub/sub | pub/sub, queue-based, streaming, batch

---

## sls-10 | Lambda Concurrency
> Reserved concurrency guarantees…

Type: select-option

```template
Reserved concurrency guarantees a function always has {{BLANK_1}} available.
```

- BLANK_1: dedicated execution capacity | dedicated execution capacity, more memory, lower latency, free invocations

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

- BLANK_1: exactly-once, ordered | exactly-once, ordered, at-least-once, at-most-once, best-effort

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

---
id: aws-rds
title: RDS & Databases
description: RDS, Aurora, DynamoDB, ElastiCache.
icon: 🐘
category: aws
---

## rds-1 | Aurora
> Aurora storage auto-scales up to…

Type: select-option

```template
Aurora storage grows automatically up to {{BLANK_1}} TB.
```

- BLANK_1: 128 | 128, 64, 256, 32

---

## rds-2 | Read Replicas
> RDS supports up to how many read replicas?

Type: select-option

```template
RDS supports up to {{BLANK_1}} read replicas.
```

- BLANK_1: 5 | 5, 3, 10, 15

---

## rds-3 | Multi-AZ
> Multi-AZ provides…

Type: select-option

```template
Multi-AZ deployment provides {{BLANK_1}}, NOT read scaling.
```

- BLANK_1: high availability | high availability, read performance, cost savings, cross-region access

---

## rds-4 | Aurora Serverless
> Aurora Serverless scales in…

Type: select-option

```template
Aurora Serverless scales in {{BLANK_1}}.
```

- BLANK_1: ACUs (Aurora Capacity Units) | ACUs (Aurora Capacity Units), vCPUs, Memory GB, IOPS

---

## rds-5 | DynamoDB
> DynamoDB is a…

Type: select-option

```template
DynamoDB is a {{BLANK_1}} database.
```

- BLANK_1: key-value and document | key-value and document, relational, graph, time-series

---

## rds-6 | DAX
> DynamoDB Accelerator (DAX) provides…

Type: select-option

```template
DAX provides {{BLANK_1}} caching for DynamoDB.
```

- BLANK_1: in-memory | in-memory, disk-based, distributed, edge

---

## rds-7 | ElastiCache
> Which ElastiCache engine supports replication?

Type: select-option

```template
For replication and persistence, use ElastiCache for {{BLANK_1}}.
```

- BLANK_1: Redis | Redis, Memcached, Both, Neither

---

## rds-8 | RDS Proxy
> RDS Proxy improves…

Type: select-option

```template
RDS Proxy improves application {{BLANK_1}} by pooling database connections.
```

- BLANK_1: scalability | scalability, security, encryption, backup

---

## rds-9 | Aurora Global
> Aurora Global Database provides…

Type: select-option

```template
Aurora Global Database enables {{BLANK_1}} replication with <1 second lag.
```

- BLANK_1: cross-region | cross-region, cross-AZ, cross-account, cross-VPC

---

## rds-10 | DynamoDB Streams
> DynamoDB Streams capture…

Type: select-option

```template
DynamoDB Streams capture {{BLANK_1}} modifications to items.
```

- BLANK_1: time-ordered | time-ordered, random, weekly, batched

---
id: aws-operations
title: Monitoring & Ops
description: CloudWatch, CloudTrail, Config, Systems Manager.
icon: 📊
category: aws
---

## ops-1 | CloudWatch vs CloudTrail
> CloudTrail records…

Type: select-option

```template
CloudTrail records {{BLANK_1}} activity.
```

- BLANK_1: API | API, metric, log, network

---

## ops-2 | CloudWatch Alarms
> Alarms can trigger…

Type: select-option

```template
CloudWatch Alarms can trigger {{BLANK_1}} actions.
```

- BLANK_1: Auto Scaling | Auto Scaling, Lambda only, EC2 only, S3 only

---

## ops-3 | AWS Config
> AWS Config evaluates…

Type: select-option

```template
AWS Config evaluates resource {{BLANK_1}} against rules.
```

- BLANK_1: compliance | compliance, performance, cost, security

---

## ops-4 | Systems Manager
> SSM Session Manager replaces…

Type: select-option

```template
SSM Session Manager provides shell access without {{BLANK_1}}.
```

- BLANK_1: SSH keys | SSH keys, IAM roles, VPN, security groups

---

## ops-5 | EventBridge
> EventBridge is the evolution of…

Type: select-option

```template
EventBridge is the successor to {{BLANK_1}}.
```

- BLANK_1: CloudWatch Events | CloudWatch Events, SNS, SQS, Step Functions

---

## ops-6 | Trusted Advisor
> Trusted Advisor checks for…

Type: select-option

```template
Trusted Advisor checks cost, performance, security, fault tolerance, and {{BLANK_1}}.
```

- BLANK_1: service limits | service limits, compliance, logging, encryption

---

## ops-7 | CloudWatch Logs
> CloudWatch Logs Insights allows you to…

Type: select-option

```template
CloudWatch Logs Insights allows you to {{BLANK_1}} log data interactively.
```

- BLANK_1: query | query, delete, encrypt, replicate

---

## ops-8 | X-Ray
> AWS X-Ray helps with…

Type: select-option

```template
AWS X-Ray provides {{BLANK_1}} for distributed applications.
```

- BLANK_1: distributed tracing | distributed tracing, log aggregation, metric collection, cost tracking

---

## ops-9 | SSM Parameter Store
> SSM Parameter Store stores…

Type: select-option

```template
SSM Parameter Store manages {{BLANK_1}} as a hierarchy.
```

- BLANK_1: configuration data and secrets | configuration data and secrets, EC2 instances, AMIs, snapshots

---

## ops-10 | CloudWatch Metrics
> EC2 detailed monitoring interval?

Type: select-option

```template
EC2 detailed monitoring sends metrics every {{BLANK_1}}.
```

- BLANK_1: 1 minute | 1 minute, 5 minutes, 30 seconds, 10 minutes

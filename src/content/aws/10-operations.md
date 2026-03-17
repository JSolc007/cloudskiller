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

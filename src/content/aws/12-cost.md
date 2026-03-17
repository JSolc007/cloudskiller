---
id: aws-cost
title: Cost Optimization
description: Pricing models, Cost Explorer, budgets, Savings Plans.
icon: 💰
category: aws
---

## cost-1 | Savings Plans
> Compute Savings Plans apply to…

Type: select-option

```template
Compute Savings Plans cover EC2, Fargate, and {{BLANK_1}}.
```

- BLANK_1: Lambda | Lambda, S3, RDS, DynamoDB

---

## cost-2 | S3 Intelligent Tiering
> Intelligent Tiering automatically moves data between…

Type: select-option

```template
Intelligent Tiering moves data between {{BLANK_1}} access tiers.
```

- BLANK_1: frequent and infrequent | frequent and infrequent, hot and cold, fast and slow, primary and secondary

---

## cost-3 | Cost Allocation Tags
> Cost allocation tags help…

Type: select-option

```template
Cost allocation tags help {{BLANK_1}} AWS spending.
```

- BLANK_1: categorize and track | categorize and track, reduce, encrypt, optimize

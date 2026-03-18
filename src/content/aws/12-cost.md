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

---

## cost-4 | Cost Explorer
> Cost Explorer provides…

Type: select-option

```template
Cost Explorer provides {{BLANK_1}} of your AWS costs and usage.
```

- BLANK_1: visualization and forecasting | visualization and forecasting, automatic optimization, free tier alerts, refunds

---

## cost-5 | AWS Budgets
> AWS Budgets can alert when costs exceed…

Type: select-option

```template
AWS Budgets sends alerts when costs exceed a {{BLANK_1}}.
```

- BLANK_1: defined threshold | defined threshold, daily limit, monthly cap, annual budget

---

## cost-6 | Spot Fleet
> Spot Fleet can maintain…

Type: select-option

```template
Spot Fleet maintains a {{BLANK_1}} of Spot and On-Demand instances.
```

- BLANK_1: target capacity | target capacity, fixed number, minimum count, maximum ratio

---

## cost-7 | Right Sizing
> AWS Compute Optimizer recommends…

Type: select-option

```template
Compute Optimizer recommends {{BLANK_1}} for EC2 instances.
```

- BLANK_1: right-sized instance types | right-sized instance types, security patches, backup schedules, network configs

---

## cost-8 | Data Transfer
> Data transfer INTO AWS from the internet is…

Type: select-option

```template
Data transfer into AWS from the internet is {{BLANK_1}}.
```

- BLANK_1: free | free, $0.01/GB, $0.09/GB, region-dependent

---

## cost-9 | EC2 Savings Plan
> EC2 Instance Savings Plans are locked to a…

Type: select-option

```template
EC2 Instance Savings Plans commit to a specific {{BLANK_1}}.
```

- BLANK_1: instance family and region | instance family and region, instance type only, AZ only, account only

---

## cost-10 | Billing Dashboard
> The AWS Billing Dashboard shows…

Type: select-option

```template
The Billing Dashboard shows {{BLANK_1}} for the current and past months.
```

- BLANK_1: spend summary | spend summary, security alerts, performance metrics, compliance status

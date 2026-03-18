---
id: aws-networking
title: VPC & Networking
description: VPC design, subnets, routing, peering, Transit Gateway.
icon: 🌐
category: aws
---

## net-1 | VPC CIDR
> What CIDR gives you 65,536 IPs?

Type: select-option

```template
VPC CIDR: {{BLANK_1}}
```

- BLANK_1: 10.0.0.0/16 | 10.0.0.0/16, 10.0.0.0/24, 10.0.0.0/8, 10.0.0.0/20

---

## net-2 | Public vs Private
> What makes a subnet public?

Type: select-option

```template
A subnet is public when it has a route to an {{BLANK_1}}.
```

- BLANK_1: Internet Gateway | Internet Gateway, NAT Gateway, VPN Gateway, Transit Gateway

---

## net-3 | NAT Gateway
> NAT Gateway allows private subnets to…

Type: select-option

```template
NAT Gateway enables {{BLANK_1}} internet access for private subnets.
```

- BLANK_1: outbound | outbound, inbound, bidirectional, none

---

## net-4 | Security Group vs NACL
> Security Groups are…

Type: select-option

```template
Security Groups are {{BLANK_1}}, NACLs are stateless.
```

- BLANK_1: stateful | stateful, stateless, regional, global

---

## net-5 | Transit Gateway
> Which service connects multiple VPCs in a hub-spoke model?

Type: select-option

```template
For hub-and-spoke multi-VPC connectivity, use {{BLANK_1}}.
```

- BLANK_1: Transit Gateway | Transit Gateway, VPC Peering, Direct Connect, Site-to-Site VPN

---

## net-6 | VPC Peering
> VPC Peering is NOT…

Type: select-option

```template
VPC Peering does NOT support {{BLANK_1}} routing.
```

- BLANK_1: transitive | transitive, encrypted, cross-region, cross-account

---

## net-7 | Route Table
> Fill in the default route.

Type: fill-blank

```template
route {
  cidr_block = "{{BLANK_1}}"
  gateway_id = aws_internet_gateway.main.id
}
```

- BLANK_1: 0.0.0.0/0 (hint: Default route CIDR)

---

## net-8 | VPC Endpoints
> A Gateway endpoint supports which two services?

Type: select-option

```template
Gateway VPC Endpoints support {{BLANK_1}}.
```

- BLANK_1: S3 and DynamoDB | S3 and DynamoDB, S3 and SQS, EC2 and RDS, Lambda and SNS

---

## net-9 | Flow Logs
> Where can VPC Flow Logs be published?

Type: select-option

```template
VPC Flow Logs can go to CloudWatch Logs or {{BLANK_1}}.
```

- BLANK_1: S3 | S3, DynamoDB, EFS, Glacier

---

## net-10 | Direct Connect
> AWS Direct Connect provides…

Type: select-option

```template
AWS Direct Connect provides a {{BLANK_1}} connection from on-premises to AWS.
```

- BLANK_1: dedicated private | dedicated private, VPN encrypted, internet-based, satellite

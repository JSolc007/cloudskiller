---
id: aws-efs
title: EFS & Storage
description: EFS, EBS, FSx — shared and block storage.
icon: 📁
category: aws
---

## efs-1 | EFS Protocol
> EFS uses which protocol?

Type: select-option

```template
EFS uses the {{BLANK_1}} protocol.
```

- BLANK_1: NFS | NFS, SMB, iSCSI, FTP

---

## efs-2 | EFS vs EBS
> EFS can be mounted by…

Type: select-option

```template
EFS can be mounted by {{BLANK_1}} EC2 instances simultaneously.
```

- BLANK_1: multiple | multiple, one, two, three

---

## efs-3 | EBS Types
> Which EBS type is best for databases?

Type: select-option

```template
For high-performance databases, use {{BLANK_1}}.
```

- BLANK_1: io2 Block Express | io2 Block Express, gp3, st1, sc1

---

## efs-4 | EBS Multi-Attach
> Multi-Attach is available on which EBS type?

Type: select-option

```template
EBS Multi-Attach works with {{BLANK_1}} volumes.
```

- BLANK_1: io1/io2 | io1/io2, gp2/gp3, st1, sc1

---

## efs-5 | FSx
> FSx for Windows uses which protocol?

Type: select-option

```template
FSx for Windows File Server uses {{BLANK_1}}.
```

- BLANK_1: SMB | SMB, NFS, iSCSI, CIFS

---

## efs-6 | EBS Snapshots
> EBS snapshots are stored in…

Type: select-option

```template
EBS snapshots are stored in {{BLANK_1}}.
```

- BLANK_1: S3 | S3, EFS, Glacier, DynamoDB

---

## efs-7 | EFS Performance Modes
> For latency-sensitive workloads, use EFS…

Type: select-option

```template
For latency-sensitive workloads, use {{BLANK_1}} performance mode.
```

- BLANK_1: General Purpose | General Purpose, Max I/O, Provisioned, Bursting

---

## efs-8 | gp3 Baseline
> gp3 volumes provide a baseline of…

Type: select-option

```template
gp3 volumes provide {{BLANK_1}} IOPS baseline regardless of size.
```

- BLANK_1: 3000 | 3000, 100, 16000, 500

---

## efs-9 | Instance Store
> Instance store volumes are…

Type: select-option

```template
Instance store volumes are {{BLANK_1}} — data is lost when instance stops.
```

- BLANK_1: ephemeral | ephemeral, persistent, replicated, encrypted

---

## efs-10 | FSx for Lustre
> FSx for Lustre is designed for…

Type: select-option

```template
FSx for Lustre is optimized for {{BLANK_1}} workloads.
```

- BLANK_1: high-performance computing | high-performance computing, file sharing, backup, archival

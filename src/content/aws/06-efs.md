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

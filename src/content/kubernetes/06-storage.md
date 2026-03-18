---
id: k8s-storage
title: Storage & Volumes
description: PV, PVC, StorageClasses, CSI drivers.
icon: 💾
category: kubernetes
---

## sto-1 | PersistentVolume
> A PersistentVolume is provisioned by…

Type: select-option

```template
A PersistentVolume is a piece of storage provisioned by an {{BLANK_1}}.
```

- BLANK_1: administrator or dynamically | administrator or dynamically, application, container, scheduler

---

## sto-2 | PVC
> A PersistentVolumeClaim is a…

Type: select-option

```template
A PVC is a {{BLANK_1}} for storage by a user.
```

- BLANK_1: request | request, volume, driver, node

---

## sto-3 | Access Modes
> ReadWriteOnce means…

Type: select-option

```template
ReadWriteOnce (RWO) allows the volume to be mounted by {{BLANK_1}}.
```

- BLANK_1: a single node | a single node, all nodes, read-only nodes, two nodes

---

## sto-4 | Storage Class
> Fill in the StorageClass provisioner.

Type: fill-blank

```template
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: fast
{{BLANK_1}}: kubernetes.io/aws-ebs
parameters:
  type: gp3
```

- BLANK_1: provisioner (hint: Key for storage backend)

---

## sto-5 | Reclaim Policy
> Default reclaim policy for dynamically provisioned PVs?

Type: select-option

```template
The default reclaim policy for dynamic PVs is {{BLANK_1}}.
```

- BLANK_1: Delete | Delete, Retain, Recycle, Archive

---

## sto-6 | Volume Binding
> WaitForFirstConsumer binding mode delays PV binding until…

Type: select-option

```template
WaitForFirstConsumer delays binding until a {{BLANK_1}} using the PVC is scheduled.
```

- BLANK_1: Pod | Pod, Node, Namespace, Deployment

---

## sto-7 | EmptyDir
> emptyDir volume lifetime is tied to the…

Type: select-option

```template
emptyDir volume exists as long as the {{BLANK_1}} exists.
```

- BLANK_1: Pod | Pod, Node, Container, Deployment

---

## sto-8 | HostPath
> hostPath mounts a file or directory from the…

Type: fill-blank

```template
volumes:
- name: data
  {{BLANK_1}}:
    path: /var/data
    type: Directory
```

- BLANK_1: hostPath (hint: Volume type from node filesystem)

---

## sto-9 | PVC in Pod
> Reference a PVC in a pod spec.

Type: fill-blank

```template
volumes:
- name: data
  {{BLANK_1}}:
    claimName: my-pvc
```

- BLANK_1: persistentVolumeClaim (hint: Volume type for PVC reference)

---

## sto-10 | ReadWriteMany
> Which access mode allows multiple nodes to mount read-write?

Type: fill-blank

```template
accessModes:
  - {{BLANK_1}}
```

- BLANK_1: ReadWriteMany (hint: RWX access mode)

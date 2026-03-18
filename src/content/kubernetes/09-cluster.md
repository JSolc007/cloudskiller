---
id: k8s-cluster
title: Cluster Architecture
description: Control plane components, etcd, kubeadm, upgrades.
icon: 🏗️
category: kubernetes
---

## clu-1 | API Server
> The central component that exposes the Kubernetes API?

Type: select-option

```template
The {{BLANK_1}} is the front end for the Kubernetes control plane.
```

- BLANK_1: kube-apiserver | kube-apiserver, kube-scheduler, kubelet, etcd

---

## clu-2 | etcd
> etcd stores…

Type: select-option

```template
etcd stores all {{BLANK_1}} data for the cluster.
```

- BLANK_1: cluster state | cluster state, container images, logs, metrics

---

## clu-3 | Scheduler
> kube-scheduler assigns pods to…

Type: select-option

```template
kube-scheduler assigns unscheduled pods to {{BLANK_1}}.
```

- BLANK_1: nodes | nodes, namespaces, services, volumes

---

## clu-4 | Controller Manager
> The controller manager runs…

Type: select-option

```template
The kube-controller-manager runs {{BLANK_1}} loops.
```

- BLANK_1: controller | controller, scheduling, networking, storage

---

## clu-5 | kubelet
> kubelet runs on…

Type: select-option

```template
The kubelet agent runs on every {{BLANK_1}}.
```

- BLANK_1: node | node, master, namespace, pod

---

## clu-6 | kube-proxy
> kube-proxy maintains…

Type: select-option

```template
kube-proxy maintains {{BLANK_1}} rules on nodes.
```

- BLANK_1: network | network, security, storage, scheduling

---

## clu-7 | kubeadm Init
> Initialize a new cluster.

Type: fill-blank

```template
kubeadm {{BLANK_1}} --pod-network-cidr=10.244.0.0/16
```

- BLANK_1: init (hint: Bootstrap control plane)

---

## clu-8 | Join Command
> Add a worker node to the cluster.

Type: fill-blank

```template
kubeadm {{BLANK_1}} <master-ip>:6443 --token <token>
```

- BLANK_1: join (hint: Connect worker to control plane)

---

## clu-9 | Upgrade Order
> During cluster upgrade, which component is upgraded first?

Type: select-option

```template
When upgrading a cluster, upgrade the {{BLANK_1}} first.
```

- BLANK_1: control plane | control plane, worker nodes, etcd backup, CNI plugin

---

## clu-10 | etcd Backup
> Command to snapshot etcd?

Type: fill-blank

```template
etcdctl {{BLANK_1}} save /tmp/etcd-backup.db
```

- BLANK_1: snapshot (hint: Create etcd backup)

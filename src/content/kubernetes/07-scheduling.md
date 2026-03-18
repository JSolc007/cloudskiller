---
id: k8s-scheduling
title: Scheduling & Taints
description: Node selectors, affinity, taints, tolerations, DaemonSets.
icon: 📅
category: kubernetes
---

## sched-1 | Node Selector
> Schedule a pod on a specific node by label.

Type: fill-blank

```template
spec:
  {{BLANK_1}}:
    disktype: ssd
  containers:
  - name: app
    image: nginx
```

- BLANK_1: nodeSelector (hint: Simple label-based scheduling)

---

## sched-2 | Taint a Node
> Command to taint a node.

Type: fill-blank

```template
kubectl {{BLANK_1}} nodes node1 key=value:NoSchedule
```

- BLANK_1: taint (hint: Apply taint to node)

---

## sched-3 | Toleration
> A toleration allows a pod to be scheduled on a…

Type: select-option

```template
Tolerations allow pods to be scheduled on {{BLANK_1}} nodes.
```

- BLANK_1: tainted | tainted, untainted, master, worker

---

## sched-4 | NoSchedule Effect
> NoSchedule taint effect means…

Type: select-option

```template
NoSchedule means new pods {{BLANK_1}} be scheduled on the node.
```

- BLANK_1: will NOT | will NOT, will always, might, should

---

## sched-5 | Node Affinity
> Fill in the node affinity rule.

Type: fill-blank

```template
spec:
  affinity:
    {{BLANK_1}}:
      requiredDuringSchedulingIgnoredDuringExecution:
        nodeSelectorTerms:
        - matchExpressions:
          - key: zone
            operator: In
            values: ["us-east-1a"]
```

- BLANK_1: nodeAffinity (hint: Affinity type for node selection)

---

## sched-6 | DaemonSet
> A DaemonSet ensures…

Type: select-option

```template
A DaemonSet ensures a copy of a pod runs on {{BLANK_1}}.
```

- BLANK_1: every node | every node, one node, master nodes, random nodes

---

## sched-7 | Static Pods
> Static pods are managed by…

Type: select-option

```template
Static pods are managed directly by the {{BLANK_1}} on a node.
```

- BLANK_1: kubelet | kubelet, kube-scheduler, kube-apiserver, etcd

---

## sched-8 | Cordon
> Prevent new pods from being scheduled on a node?

Type: fill-blank

```template
kubectl {{BLANK_1}} node1
```

- BLANK_1: cordon (hint: Mark node as unschedulable)

---

## sched-9 | Drain
> Safely evict all pods from a node?

Type: fill-blank

```template
kubectl {{BLANK_1}} node1 --ignore-daemonsets
```

- BLANK_1: drain (hint: Evict pods and cordon)

---

## sched-10 | PreferNoSchedule
> PreferNoSchedule is a…

Type: select-option

```template
PreferNoSchedule is a {{BLANK_1}} version of NoSchedule.
```

- BLANK_1: soft | soft, hard, strict, absolute

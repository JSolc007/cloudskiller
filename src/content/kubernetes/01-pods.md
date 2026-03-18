---
id: k8s-pods
title: Pods & Containers
description: Pod lifecycle, multi-container patterns, resource limits.
icon: 🫛
category: kubernetes
---

## pod-1 | Pod Definition
> What is the smallest deployable unit in Kubernetes?

Type: select-option

```template
The smallest deployable unit in Kubernetes is a {{BLANK_1}}.
```

- BLANK_1: Pod | Pod, Container, Deployment, ReplicaSet

---

## pod-2 | Create Pod
> kubectl command to create a pod imperatively?

Type: fill-blank

```template
kubectl {{BLANK_1}} pod nginx --image=nginx
```

- BLANK_1: run (hint: Imperative pod creation command)

---

## pod-3 | Pod YAML
> Fill in the pod spec.

Type: fill-blank

```template
apiVersion: v1
kind: {{BLANK_1}}
metadata:
  name: nginx
spec:
  containers:
  - name: nginx
    image: nginx:latest
```

- BLANK_1: Pod (hint: Resource kind for a pod)

---

## pod-4 | Multi-Container Pattern
> A sidecar container runs…

Type: select-option

```template
A sidecar container runs {{BLANK_1}} the main application container.
```

- BLANK_1: alongside | alongside, before, after, instead of

---

## pod-5 | Init Containers
> Init containers run…

Type: select-option

```template
Init containers run {{BLANK_1}} the main containers start.
```

- BLANK_1: before | before, after, alongside, instead of

---

## pod-6 | Resource Requests
> Resource requests are used for…

Type: select-option

```template
Resource requests are used for {{BLANK_1}} decisions.
```

- BLANK_1: scheduling | scheduling, billing, logging, networking

---

## pod-7 | Resource Limits
> Fill in the resource limit.

Type: fill-blank

```template
resources:
  {{BLANK_1}}:
    memory: "128Mi"
    cpu: "500m"
```

- BLANK_1: limits (hint: Maximum resource constraint)

---

## pod-8 | Pod Logs
> Command to view pod logs?

Type: fill-blank

```template
kubectl {{BLANK_1}} nginx
```

- BLANK_1: logs (hint: View container output)

---

## pod-9 | Pod Exec
> Execute a command inside a running pod?

Type: fill-blank

```template
kubectl {{BLANK_1}} -it nginx -- /bin/bash
```

- BLANK_1: exec (hint: Run command in container)

---

## pod-10 | Restart Policy
> Default restart policy for a pod?

Type: select-option

```template
The default pod restart policy is {{BLANK_1}}.
```

- BLANK_1: Always | Always, Never, OnFailure, Unless-Stopped

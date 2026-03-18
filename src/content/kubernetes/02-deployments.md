---
id: k8s-deployments
title: Deployments & ReplicaSets
description: Rolling updates, rollbacks, scaling strategies.
icon: 🚀
category: kubernetes
---

## dep-1 | Deployment Purpose
> A Deployment manages…

Type: select-option

```template
A Deployment manages a {{BLANK_1}} which manages Pods.
```

- BLANK_1: ReplicaSet | ReplicaSet, DaemonSet, StatefulSet, Job

---

## dep-2 | Create Deployment
> Create a deployment imperatively.

Type: fill-blank

```template
kubectl create {{BLANK_1}} nginx --image=nginx --replicas=3
```

- BLANK_1: deployment (hint: Resource type to create)

---

## dep-3 | Replicas
> Set the number of replicas.

Type: fill-blank

```template
spec:
  {{BLANK_1}}: 3
  selector:
    matchLabels:
      app: nginx
```

- BLANK_1: replicas (hint: Desired pod count field)

---

## dep-4 | Rolling Update
> Default deployment strategy?

Type: select-option

```template
The default Deployment strategy is {{BLANK_1}}.
```

- BLANK_1: RollingUpdate | RollingUpdate, Recreate, Blue-Green, Canary

---

## dep-5 | Max Unavailable
> In a rolling update, maxUnavailable controls…

Type: select-option

```template
maxUnavailable defines the max number of pods {{BLANK_1}} during update.
```

- BLANK_1: that can be unavailable | that can be unavailable, created above desired, deleted permanently, restarted

---

## dep-6 | Rollback
> Command to undo last deployment rollout?

Type: fill-blank

```template
kubectl rollout {{BLANK_1}} deployment/nginx
```

- BLANK_1: undo (hint: Revert to previous revision)

---

## dep-7 | Rollout Status
> Check deployment rollout status?

Type: fill-blank

```template
kubectl rollout {{BLANK_1}} deployment/nginx
```

- BLANK_1: status (hint: View rollout progress)

---

## dep-8 | Scale Command
> Scale a deployment to 5 replicas?

Type: fill-blank

```template
kubectl {{BLANK_1}} deployment nginx --replicas=5
```

- BLANK_1: scale (hint: Change replica count)

---

## dep-9 | Rollout History
> View deployment revision history?

Type: fill-blank

```template
kubectl rollout {{BLANK_1}} deployment/nginx
```

- BLANK_1: history (hint: List past revisions)

---

## dep-10 | Recreate Strategy
> Recreate strategy causes…

Type: select-option

```template
Recreate strategy {{BLANK_1}} before creating new ones.
```

- BLANK_1: terminates all existing pods | terminates all existing pods, keeps old pods running, creates pods gradually, pauses the rollout

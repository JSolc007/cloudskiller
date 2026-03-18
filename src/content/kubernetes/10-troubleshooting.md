---
id: k8s-troubleshooting
title: Troubleshooting
description: Debugging pods, nodes, services, and cluster issues.
icon: 🔍
category: kubernetes
---

## ts-1 | Pod Status
> CrashLoopBackOff means the container is…

Type: select-option

```template
CrashLoopBackOff means the container {{BLANK_1}}.
```

- BLANK_1: keeps crashing and restarting | keeps crashing and restarting, is running normally, is pending scheduling, is being deleted

---

## ts-2 | Describe Pod
> Command to see detailed pod information and events?

Type: fill-blank

```template
kubectl {{BLANK_1}} pod nginx
```

- BLANK_1: describe (hint: Show detailed resource info)

---

## ts-3 | Pending Pod
> A pod stuck in Pending usually means…

Type: select-option

```template
A Pending pod usually means {{BLANK_1}}.
```

- BLANK_1: no node has enough resources | no node has enough resources, image pull failed, container crashed, network is down

---

## ts-4 | ImagePullBackOff
> ImagePullBackOff indicates…

Type: select-option

```template
ImagePullBackOff means Kubernetes {{BLANK_1}}.
```

- BLANK_1: cannot pull the container image | cannot pull the container image, is throttling pulls, has no storage, lost network

---

## ts-5 | Node NotReady
> Command to check node conditions?

Type: fill-blank

```template
kubectl describe {{BLANK_1}} node1
```

- BLANK_1: node (hint: Resource type for node details)

---

## ts-6 | Service Debug
> Test service connectivity from inside the cluster.

Type: fill-blank

```template
kubectl run test --image=busybox --rm -it -- {{BLANK_1}} http://my-service
```

- BLANK_1: wget (hint: Download tool to test HTTP)

---

## ts-7 | Events
> View cluster-wide events sorted by time?

Type: fill-blank

```template
kubectl get {{BLANK_1}} --sort-by='.lastTimestamp'
```

- BLANK_1: events (hint: Cluster event log resource)

---

## ts-8 | Container Logs Previous
> View logs from a crashed container (previous instance)?

Type: fill-blank

```template
kubectl logs nginx --{{BLANK_1}}
```

- BLANK_1: previous (hint: Flag for previous container instance)

---

## ts-9 | DNS Debugging
> Test DNS resolution inside a cluster.

Type: fill-blank

```template
kubectl run test --image=busybox --rm -it -- {{BLANK_1}} kubernetes.default
```

- BLANK_1: nslookup (hint: DNS lookup tool)

---

## ts-10 | Top Command
> View resource usage of pods?

Type: fill-blank

```template
kubectl {{BLANK_1}} pods
```

- BLANK_1: top (hint: Resource usage metrics)

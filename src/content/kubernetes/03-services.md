---
id: k8s-services
title: Services & DNS
description: ClusterIP, NodePort, LoadBalancer, headless services.
icon: 🔌
category: kubernetes
---

## svc-1 | Service Purpose
> A Service provides…

Type: select-option

```template
A Kubernetes Service provides stable {{BLANK_1}} to a set of Pods.
```

- BLANK_1: network access | network access, storage, configuration, scheduling

---

## svc-2 | ClusterIP
> Default service type?

Type: select-option

```template
The default Service type is {{BLANK_1}}.
```

- BLANK_1: ClusterIP | ClusterIP, NodePort, LoadBalancer, ExternalName

---

## svc-3 | NodePort Range
> NodePort allocates a port in which range?

Type: select-option

```template
NodePort services expose ports in the {{BLANK_1}} range.
```

- BLANK_1: 30000-32767 | 30000-32767, 80-443, 1024-65535, 8080-9090

---

## svc-4 | LoadBalancer
> LoadBalancer type provisions…

Type: select-option

```template
LoadBalancer type provisions a {{BLANK_1}} load balancer.
```

- BLANK_1: cloud provider | cloud provider, internal, software, manual

---

## svc-5 | Service Selector
> Fill in the service selector.

Type: fill-blank

```template
spec:
  {{BLANK_1}}:
    app: nginx
  ports:
  - port: 80
    targetPort: 80
```

- BLANK_1: selector (hint: Label matching field)

---

## svc-6 | DNS Resolution
> In-cluster DNS name for a service in namespace "prod"?

Type: fill-blank

```template
my-service.{{BLANK_1}}.svc.cluster.local
```

- BLANK_1: prod (hint: Namespace in the DNS name)

---

## svc-7 | Headless Service
> A headless service has clusterIP set to…

Type: fill-blank

```template
spec:
  clusterIP: {{BLANK_1}}
  selector:
    app: db
```

- BLANK_1: None (hint: Special value for headless)

---

## svc-8 | Expose Command
> Expose a deployment as a service?

Type: fill-blank

```template
kubectl {{BLANK_1}} deployment nginx --port=80 --type=NodePort
```

- BLANK_1: expose (hint: Create service from resource)

---

## svc-9 | Endpoints
> Services route traffic to pods via…

Type: select-option

```template
Services discover pods through {{BLANK_1}} objects.
```

- BLANK_1: Endpoints | Endpoints, Routes, Ingress, Proxies

---

## svc-10 | ExternalName
> ExternalName service maps to a…

Type: select-option

```template
ExternalName returns a {{BLANK_1}} record pointing to an external host.
```

- BLANK_1: CNAME | CNAME, A, SRV, TXT

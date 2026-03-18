---
id: k8s-ingress
title: Ingress & Network Policies
description: Ingress controllers, rules, TLS, network policies.
icon: 🌐
category: kubernetes
---

## ing-1 | Ingress Purpose
> Ingress manages…

Type: select-option

```template
Ingress manages {{BLANK_1}} access to services in a cluster.
```

- BLANK_1: external HTTP/HTTPS | external HTTP/HTTPS, internal pod-to-pod, database, storage

---

## ing-2 | Ingress Controller
> Ingress resources require a…

Type: select-option

```template
Ingress resources require an {{BLANK_1}} to function.
```

- BLANK_1: Ingress Controller | Ingress Controller, Service Mesh, API Gateway, Load Balancer

---

## ing-3 | Path Rule
> Fill in the ingress path rule.

Type: fill-blank

```template
spec:
  rules:
  - host: app.example.com
    http:
      {{BLANK_1}}:
      - path: /api
        pathType: Prefix
        backend:
          service:
            name: api-svc
            port:
              number: 80
```

- BLANK_1: paths (hint: List of URL path rules)

---

## ing-4 | TLS Termination
> Configure TLS on Ingress.

Type: fill-blank

```template
spec:
  {{BLANK_1}}:
  - hosts:
    - app.example.com
    secretName: tls-secret
```

- BLANK_1: tls (hint: TLS configuration section)

---

## ing-5 | pathType
> Which pathType matches exact URL paths only?

Type: select-option

```template
pathType: {{BLANK_1}} matches the URL path exactly.
```

- BLANK_1: Exact | Exact, Prefix, ImplementationSpecific, Regex

---

## ing-6 | Default Backend
> Default backend handles requests that…

Type: select-option

```template
The default backend handles requests that {{BLANK_1}}.
```

- BLANK_1: don't match any rule | don't match any rule, come first, are authenticated, use HTTPS

---

## ing-7 | Network Policy
> NetworkPolicy controls…

Type: select-option

```template
NetworkPolicy controls {{BLANK_1}} traffic flow at the pod level.
```

- BLANK_1: ingress and egress | ingress and egress, only ingress, only egress, external only

---

## ing-8 | Deny All Ingress
> Create a deny-all ingress policy.

Type: fill-blank

```template
spec:
  podSelector: {}
  policyTypes:
  - {{BLANK_1}}
```

- BLANK_1: Ingress (hint: Traffic direction to deny)

---

## ing-9 | Policy Selector
> NetworkPolicy applies to pods matching…

Type: fill-blank

```template
spec:
  {{BLANK_1}}:
    matchLabels:
      role: db
```

- BLANK_1: podSelector (hint: Select which pods the policy applies to)

---

## ing-10 | CNI Requirement
> Network policies require a CNI plugin that supports them, such as…

Type: select-option

```template
Network policies are enforced by CNI plugins like {{BLANK_1}}.
```

- BLANK_1: Calico | Calico, Flannel (basic), Docker, containerd

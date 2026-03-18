---
id: k8s-rbac
title: RBAC & Security
description: Roles, ClusterRoles, ServiceAccounts, security contexts.
icon: 🔐
category: kubernetes
---

## rbac-1 | RBAC Components
> RBAC uses Roles and…

Type: select-option

```template
RBAC authorization uses Roles and {{BLANK_1}} to grant permissions.
```

- BLANK_1: RoleBindings | RoleBindings, Policies, Tokens, Certificates

---

## rbac-2 | Role vs ClusterRole
> A Role is scoped to a…

Type: select-option

```template
A Role grants permissions within a {{BLANK_1}}.
```

- BLANK_1: namespace | namespace, cluster, node, pod

---

## rbac-3 | Create Role
> Create a role that allows reading pods.

Type: fill-blank

```template
kubectl create {{BLANK_1}} pod-reader --verb=get,list,watch --resource=pods
```

- BLANK_1: role (hint: RBAC resource type)

---

## rbac-4 | RoleBinding
> Bind a role to a user.

Type: fill-blank

```template
kubectl create {{BLANK_1}} read-pods --role=pod-reader --user=jane
```

- BLANK_1: rolebinding (hint: Connect role to subject)

---

## rbac-5 | ServiceAccount
> Every namespace has a default…

Type: fill-blank

```template
Every namespace has a default {{BLANK_1}}.
```

- BLANK_1: ServiceAccount (hint: Identity for pods)

---

## rbac-6 | Security Context
> Run a container as non-root.

Type: fill-blank

```template
securityContext:
  {{BLANK_1}}: true
```

- BLANK_1: runAsNonRoot (hint: Enforce non-root execution)

---

## rbac-7 | Can-I
> Check if you have permission to create deployments?

Type: fill-blank

```template
kubectl auth {{BLANK_1}} create deployments
```

- BLANK_1: can-i (hint: Permission check subcommand)

---

## rbac-8 | ClusterRole
> ClusterRole grants permissions across…

Type: select-option

```template
ClusterRole grants permissions across {{BLANK_1}}.
```

- BLANK_1: the entire cluster | the entire cluster, one namespace, one node, one pod

---

## rbac-9 | API Groups
> Core API group resources use apiGroup…

Type: fill-blank

```template
rules:
- apiGroups: ["{{BLANK_1}}"]
  resources: ["pods"]
  verbs: ["get", "list"]
```

- BLANK_1:  (hint: Empty string for core API group)

---

## rbac-10 | Read Only FS
> Make container filesystem read-only?

Type: fill-blank

```template
securityContext:
  {{BLANK_1}}: true
```

- BLANK_1: readOnlyRootFilesystem (hint: Prevent writes to container FS)

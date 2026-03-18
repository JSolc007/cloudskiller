---
id: k8s-configmaps
title: ConfigMaps & Secrets
description: Configuration management, environment variables, volumes.
icon: ⚙️
category: kubernetes
---

## cm-1 | ConfigMap Purpose
> ConfigMaps store…

Type: select-option

```template
ConfigMaps store {{BLANK_1}} data as key-value pairs.
```

- BLANK_1: non-confidential configuration | non-confidential configuration, encrypted secrets, binary files, container images

---

## cm-2 | Create ConfigMap
> Create ConfigMap from literal values.

Type: fill-blank

```template
kubectl create {{BLANK_1}} my-config --from-literal=key1=value1
```

- BLANK_1: configmap (hint: Resource type for config)

---

## cm-3 | Env From ConfigMap
> Inject ConfigMap as environment variable.

Type: fill-blank

```template
envFrom:
- {{BLANK_1}}:
    name: my-config
```

- BLANK_1: configMapRef (hint: Reference to ConfigMap)

---

## cm-4 | Secret Types
> Default Secret type?

Type: select-option

```template
The default Secret type is {{BLANK_1}}.
```

- BLANK_1: Opaque | Opaque, kubernetes.io/tls, kubernetes.io/ssh-auth, kubernetes.io/basic-auth

---

## cm-5 | Secret Encoding
> Secrets store data in…

Type: select-option

```template
Secret values are stored as {{BLANK_1}} encoded strings.
```

- BLANK_1: base64 | base64, SHA256, AES-encrypted, plain text

---

## cm-6 | Create Secret
> Create a secret from literal.

Type: fill-blank

```template
kubectl create secret {{BLANK_1}} my-secret --from-literal=password=admin123
```

- BLANK_1: generic (hint: Secret subcommand for arbitrary data)

---

## cm-7 | Volume Mount
> Mount ConfigMap as a volume.

Type: fill-blank

```template
volumes:
- name: config-vol
  {{BLANK_1}}:
    name: my-config
```

- BLANK_1: configMap (hint: Volume type for ConfigMap)

---

## cm-8 | Secret Volume
> Mount Secret as a volume.

Type: fill-blank

```template
volumes:
- name: secret-vol
  {{BLANK_1}}:
    secretName: my-secret
```

- BLANK_1: secret (hint: Volume type for secrets)

---

## cm-9 | Immutable ConfigMap
> Prevent ConfigMap from being updated?

Type: fill-blank

```template
apiVersion: v1
kind: ConfigMap
metadata:
  name: my-config
{{BLANK_1}}: true
data:
  key: value
```

- BLANK_1: immutable (hint: Field to lock ConfigMap)

---

## cm-10 | TLS Secret
> Create a TLS secret from certificate files.

Type: fill-blank

```template
kubectl create secret {{BLANK_1}} tls-secret --cert=cert.pem --key=key.pem
```

- BLANK_1: tls (hint: Secret type for certificates)

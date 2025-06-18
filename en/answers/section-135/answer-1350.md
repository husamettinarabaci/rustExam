## 📘 Section: Microservices Architecture Patterns  
### 🔹 Category: Secure management of secrets and configuration  
#### ✅ Answer 1350: Secure management of secrets and configuration

Secret and configuration management is critical to prevent sensitive data leaks. In Rust microservices, Kubernetes Secrets and ConfigMap are used to securely manage such information.

Below is a sample YAML file:

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: db-secret
stringData:
  password: supersecret
---
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
  labels:
    app: rust-microservice
  data:
    RUST_LOG: info
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: rust-microservice
spec:
  template:
    spec:
      containers:
        - name: rust-microservice
          image: myrepo/rust-microservice:latest
          env:
            - name: DB_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: db-secret
                  key: password
            - name: RUST_LOG
              valueFrom:
                configMapKeyRef:
                  name: app-config
                  key: RUST_LOG
```
This configuration securely injects the password and log level into the container.

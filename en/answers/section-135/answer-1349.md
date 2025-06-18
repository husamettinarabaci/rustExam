## 📘 Section: Microservices Architecture Patterns  
### 🔹 Category: Blue-green and canary deployments  
#### ✅ Answer 1349: Blue-green and canary deployments

Blue-green deployment runs old and new versions in parallel, switching all traffic to the new version at once. Canary deployment gradually exposes a new version to a small portion of traffic before a full rollout.

In Rust microservices, these strategies can be implemented with Kubernetes. For example, a canary deployment uses two deployments and a service:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: rust-microservice-stable
spec:
  replicas: 3
  template:
    metadata:
      labels:
        app: rust-microservice
        version: stable
    spec:
      containers:
        - name: rust-microservice
          image: myrepo/rust-microservice:stable
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: rust-microservice-canary
spec:
  replicas: 1
  template:
    metadata:
      labels:
        app: rust-microservice
        version: canary
    spec:
      containers:
        - name: rust-microservice
          image: myrepo/rust-microservice:canary
---
apiVersion: v1
kind: Service
metadata:
  name: rust-microservice
spec:
  selector:
    app: rust-microservice
  ports:
    - port: 80
```
This configuration directs a portion of traffic to the canary version.

## 📘 Section: Microservices and Service Meshes  
### 🔹 Category: Orchestrating with Kubernetes  
#### ✅ Answer 1299: Orchestrating microservices with Kubernetes

Kubernetes is used to automatically deploy, scale, and update Rust microservices. Deployments manage pods, and Services provide network access. Features like auto-scaling and rolling updates offer high availability and easy management.

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myservice
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myservice
  template:
    metadata:
      labels:
        app: myservice
    spec:
      containers:
      - name: myservice
        image: myrepo/myservice:latest
---
apiVersion: v1
kind: Service
metadata:
  name: myservice
spec:
  selector:
    app: myservice
  ports:
    - protocol: TCP
      port: 80
      targetPort: 8080
```

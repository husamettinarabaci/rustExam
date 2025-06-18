## 📘 Section: Microservices Architecture Patterns  
### 🔹 Category: Service mesh integration  
#### ✅ Answer 1346: Service mesh integration in Rust microservices

A service mesh is an infrastructure layer that manages communication between microservices. Rust microservices are typically integrated into a mesh (like Istio) using a sidecar proxy such as Envoy. The mesh provides service discovery, load balancing, security, and observability.

Below is an example Kubernetes YAML configuration to include a Rust microservice in an Istio service mesh:

```yaml
apiVersion: v1
kind: Service
metadata:
  name: rust-microservice
spec:
  selector:
    app: rust-microservice
  ports:
    - protocol: TCP
      port: 80
      targetPort: 8080
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: rust-microservice
spec:
  selector:
    matchLabels:
      app: rust-microservice
  template:
    metadata:
      labels:
        app: rust-microservice
      annotations:
        sidecar.istio.io/inject: "true"
    spec:
      containers:
        - name: rust-microservice
          image: myrepo/rust-microservice:latest
          ports:
            - containerPort: 8080
```
Here, `sidecar.istio.io/inject: "true"` automatically injects the Envoy sidecar, enabling mesh features for the Rust service.

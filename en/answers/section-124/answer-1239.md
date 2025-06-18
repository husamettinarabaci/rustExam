## 📘 Section: Microservices and Service Meshes
### 🔹 Category: Distributed Logging and Tracing with OpenTelemetry
#### ✅ Answer 1239: Deploying Rust microservices with Kubernetes

To deploy a Rust microservice on Kubernetes:

1. **Containerize with Docker:**
   ```dockerfile
   FROM rust:1.70 as builder
   WORKDIR /app
   COPY . .
   RUN cargo build --release
   FROM debian:buster-slim
   COPY --from=builder /app/target/release/myservice /usr/local/bin/myservice
   CMD ["myservice"]
   ```
2. **Kubernetes Deployment YAML:**
   ```yaml
   apiVersion: apps/v1
   kind: Deployment
   metadata:
     name: myservice
   spec:
     replicas: 1
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
           ports:
           - containerPort: 8080
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

This setup builds, deploys, and exposes a Rust service on Kubernetes.

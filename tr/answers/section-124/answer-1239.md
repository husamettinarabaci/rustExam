## 📘 Bölüm: Mikroservisler ve Servis Mesh'leri
### 🔹 Kategori: OpenTelemetry ile Dağıtık Loglama ve İzleme
#### ✅ Cevap 1239: Rust mikroservislerini Kubernetes ile dağıtma

Bir Rust mikroservisini Kubernetes üzerinde dağıtmak için:

1. **Docker ile konteynerleştirme:**
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

Bu yapı, Rust servisini derler, dağıtır ve Kubernetes üzerinde dışa açar.

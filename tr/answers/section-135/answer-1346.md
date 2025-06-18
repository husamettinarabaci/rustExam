## 📘 Bölüm: Mikroservis Mimari Desenleri  
### 🔹 Kategori: Servis mesh entegrasyonu  
#### ✅ Cevap 1346: Rust mikroservislerinde servis mesh entegrasyonu

Servis mesh, mikroservisler arasındaki iletişimi yöneten bir altyapı katmanıdır. Rust mikroservisleri genellikle Envoy gibi bir sidecar proxy ile mesh'e entegre edilir. Mesh, servis keşfi, yük dengeleme, güvenlik ve gözlemlenebilirlik sağlar.

Aşağıda, bir Rust mikroservisinin Istio ile servis mesh'e dahil edilmesi için örnek bir Kubernetes YAML yapılandırması verilmiştir:

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
Bu yapılandırmada, `sidecar.istio.io/inject: "true"` ile Rust servisine Envoy sidecar otomatik eklenir. Böylece servis mesh özelliklerinden faydalanılır.

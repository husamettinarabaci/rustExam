## 📘 Bölüm: Mikroservis Mimari Desenleri  
### 🔹 Kategori: Blue-green ve canary dağıtımlar  
#### ✅ Cevap 1349: Blue-green ve canary dağıtımlar

Blue-green dağıtım, eski ve yeni sürümlerin paralel çalıştırılması ve trafiğin bir anda yeni sürüme yönlendirilmesidir. Canary dağıtım ise yeni sürümün küçük bir kısmının trafiğe açılması ve kademeli olarak yayılmasıdır.

Rust mikroservislerinde bu stratejiler Kubernetes ile uygulanabilir. Örneğin, canary için iki deployment ve bir servis tanımlanır:

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
Bu yapılandırma ile trafiğin bir kısmı canary sürüme yönlendirilir.

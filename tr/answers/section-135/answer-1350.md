## 📘 Bölüm: Mikroservis Mimari Desenleri  
### 🔹 Kategori: Gizli anahtar ve konfigürasyonun güvenli yönetimi  
#### ✅ Cevap 1350: Gizli anahtar ve konfigürasyonun güvenli yönetimi

Gizli anahtar ve konfigürasyon yönetimi, hassas verilerin sızmasını önlemek için kritiktir. Rust mikroservislerinde Kubernetes Secrets ve ConfigMap ile bu bilgiler güvenli şekilde yönetilir.

Aşağıda örnek bir YAML dosyası verilmiştir:

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
Bu yapılandırma ile şifre ve log seviyesi güvenli şekilde konteynere aktarılır.

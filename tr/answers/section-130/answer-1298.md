## 📘 Bölüm: Mikroservisler ve Servis Mesh'leri  
### 🔹 Kategori: Docker ile Konteynerleştirme  
#### ✅ Cevap 1298: Rust mikroservislerini Docker ile konteynerleştirme

Rust mikroservisleri için Dockerfile genellikle çok aşamalı derleme ile yazılır. İlk aşamada uygulama derlenir, ikinci aşamada sadece çalıştırılabilir dosya küçük bir imaja kopyalanır. Bu, imaj boyutunu küçültür ve güvenliği artırır. Alpine tabanlı veya scratch imajlar tercih edilebilir.

```dockerfile
FROM rust:1.70 as builder
WORKDIR /app
COPY . .
RUN cargo build --release

FROM debian:buster-slim
COPY --from=builder /app/target/release/myservice /usr/local/bin/myservice
CMD ["myservice"]
```

## 📘 Bölüm: Full-Stack Rust Entegrasyonu  
### 🔹 Kategori: Rust web uygulamalarını Docker ile dağıtma  
#### ✅ Cevap 698: Rust web uygulamalarını Docker ile dağıtma

Rust web uygulamasını Docker ile dağıtmak için bir Dockerfile oluşturup uygulamayı derleyip çalıştırabilirsiniz. Küçük imajlar için çok aşamalı (multi-stage) build önerilir.

Örnek Dockerfile:
```dockerfile
FROM rust:1.70 as builder
WORKDIR /app
COPY . .
RUN cargo build --release

FROM debian:buster-slim
COPY --from=builder /app/target/release/myapp /usr/local/bin/myapp
CMD ["myapp"]
```
Bu yapı, uygulamayı bir aşamada derler ve sadece binary'yi küçük bir imaja kopyalar.

## 📘 Section: Microservices and Service Meshes  
### 🔹 Category: Containerizing with Docker  
#### ✅ Answer 1298: Containerizing Rust microservices with Docker

A typical Dockerfile for Rust microservices uses multi-stage builds. The first stage compiles the app, and the second stage copies only the binary to a small image. This reduces image size and improves security. Alpine-based or scratch images are often used.

```dockerfile
FROM rust:1.70 as builder
WORKDIR /app
COPY . .
RUN cargo build --release

FROM debian:buster-slim
COPY --from=builder /app/target/release/myservice /usr/local/bin/myservice
CMD ["myservice"]
```

## 📘 Section: Full-Stack Rust Integration  
### 🔹 Category: Deploying Rust web applications with Docker  
#### ✅ Answer 698: Deploying Rust web applications with Docker

To deploy a Rust web app with Docker, create a Dockerfile that builds and runs your application. Use multi-stage builds for smaller images.

Example Dockerfile:
```dockerfile
FROM rust:1.70 as builder
WORKDIR /app
COPY . .
RUN cargo build --release

FROM debian:buster-slim
COPY --from=builder /app/target/release/myapp /usr/local/bin/myapp
CMD ["myapp"]
```
This builds the app in one stage and copies the binary to a minimal image for deployment.

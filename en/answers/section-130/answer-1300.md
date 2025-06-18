## 📘 Section: Microservices and Service Meshes  
### 🔹 Category: High Availability and Scaling  
#### ✅ Answer 1300: Scaling microservices for high availability

Horizontal scaling adds more service instances to distribute load; vertical scaling increases resources of a single server. Auto-restart, health checks, and fault tolerance are managed by orchestrators like Kubernetes. Best practices for high availability include multi-region deployment, data replication, and automatic load balancing.

```rust
// Example health check endpoint in Rust
async fn health() -> impl Responder {
    HttpResponse::Ok().body("OK")
}
```

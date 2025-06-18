## 📘 Section: Microservice Architecture with Rust
### 🔹 Category: Service Discovery
#### ✅ Answer 1232: Service discovery and registration

Service discovery enables microservices to find each other dynamically. Common approaches include DNS-based discovery, Consul, and etcd.

In Rust, you can:
- Use crates like `consulrs` for Consul or `etcd-client` for etcd.
- Register your service by sending HTTP requests to the registry.
- Query the registry to discover other services.

Example (Consul):
```rust
// Register service (simplified)
let client = consulrs::Client::new("http://localhost:8500");
client.agent().service_register(...)?;
// Discover services
let services = client.catalog().service("my-service", None)?;
```
This allows dynamic scaling and resilience in your Rust microservices.

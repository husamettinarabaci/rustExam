## 📘 Section: Rust in Cloud and Distributed Systems
### 🔹 Category: Microservices with Rust
#### ✅ Answer 934: Service discovery and load balancing

Service discovery allows microservices to find each other dynamically, which is essential in distributed systems where services may scale up or down. Load balancing distributes requests among available service instances to optimize resource use and reliability.

A Rust application can register itself with a service registry (like Consul or etcd) using HTTP APIs. Here is a simplified example using pseudocode:

```rust
// Register service with Consul
fn register_service() {
    // Use reqwest or similar crate to send HTTP POST to Consul
    // POST /v1/agent/service/register
    // Body: { "Name": "my-service", "Address": "127.0.0.1", "Port": 8080 }
}

// Discover services
fn discover_services() {
    // GET /v1/catalog/service/my-service
    // Parse response to get list of available instances
}

// Simple round-robin load balancer
struct LoadBalancer {
    services: Vec<String>,
    index: usize,
}

impl LoadBalancer {
    fn next(&mut self) -> Option<&String> {
        if self.services.is_empty() { return None; }
        let service = &self.services[self.index % self.services.len()];
        self.index += 1;
        Some(service)
    }
}
```

Rust-based systems often use libraries like `reqwest` for HTTP and can integrate with service registries. Load balancing can be implemented in-app (e.g., round-robin) or delegated to infrastructure (e.g., Envoy, NGINX).

## 📘 Section: Microservices and Service Meshes  
### 🔹 Category: Service Discovery and Load Balancing  
#### ✅ Answer 1293: Service discovery and load balancing

Service discovery can use centralized (Consul, etcd) or decentralized (DNS-based) methods. Load balancing is typically handled by reverse proxies (nginx, Envoy) or service mesh solutions. Rust applications should obtain service addresses dynamically and be designed to run behind a load balancer. Centralized discovery offers easier management, while decentralized methods provide more flexibility.

```rust
// Example of DNS-based service discovery
grpc_client.connect("http://user-service.local:50051").await?;
```

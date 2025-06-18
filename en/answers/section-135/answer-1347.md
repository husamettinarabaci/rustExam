## 📘 Section: Microservices Architecture Patterns  
### 🔹 Category: Observability and logging  
#### ✅ Answer 1347: Observability and logging best practices

Observability is critical for monitoring the health and performance of microservices. In Rust, crates like `tracing` or `log` are used for logging, and tools like `prometheus` are used for metrics collection.

Below is a simple logging example using the `tracing` crate:

```rust
use tracing::{info, instrument};

#[instrument]
fn process_request(id: u32) {
    info!(request_id = id, "Processing request");
}

fn main() {
    tracing_subscriber::fmt::init();
    process_request(42);
}
```
This code collects structured logs that can be analyzed in a centralized system.

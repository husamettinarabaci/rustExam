## 📘 Section: Tokio Ecosystem Deep Dive  
### 🔹 Category: Debugging Tokio Runtime Issues  
#### ✅ Answer 1078: Debugging Tokio runtime issues

Debugging async code can be challenging. Tokio provides tools like `tokio-console` for runtime introspection, and you can use logging and tracing crates to monitor task execution and resource usage.

```rust
use tokio::time::sleep;
use std::time::Duration;

#[tokio::main]
async fn main() {
    println!("Starting async task");
    sleep(Duration::from_millis(100)).await;
    println!("Task completed");
}
// For advanced debugging, add `tokio-console` to your dependencies and run with `RUST_LOG=debug`.
```

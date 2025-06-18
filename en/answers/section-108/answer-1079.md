## 📘 Section: Tokio Ecosystem Deep Dive  
### 🔹 Category: Metrics and Monitoring in Tokio Applications  
#### ✅ Answer 1079: Metrics and monitoring in Tokio applications

Monitoring async applications is crucial for production. Tokio integrates with crates like `metrics`, `tracing`, and `tokio-metrics` to collect and export runtime statistics, such as task counts, poll durations, and resource usage.

```rust
use tokio::time::{sleep, Duration};
use tracing::{info, Level};
use tracing_subscriber;

#[tokio::main]
async fn main() {
    tracing_subscriber::fmt().with_max_level(Level::INFO).init();
    info!("Application started");
    sleep(Duration::from_millis(100)).await;
    info!("Application finished");
}
```

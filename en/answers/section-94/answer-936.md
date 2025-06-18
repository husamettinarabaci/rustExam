## 📘 Section: Rust in Cloud and Distributed Systems
### 🔹 Category: Microservices with Rust
#### ✅ Answer 936: Observability: metrics, tracing, and logging

Observability enables you to understand, monitor, and debug distributed systems. It is achieved through metrics (quantitative measurements), tracing (request flows), and logging (event records).

In Rust, you can use crates like `metrics`, `tracing`, and `log`:

```rust
// Metrics
use metrics::{increment_counter, gauge};
fn record_metrics() {
    increment_counter!("requests_total");
    gauge!("queue_depth", 5.0);
}

// Tracing
use tracing::{info_span, instrument};
#[instrument]
fn process_request() {
    let span = info_span!("process_request");
    let _enter = span.enter();
    // ...
}

// Logging
use log::{info, error};
fn log_example() {
    info!("Service started");
    error!("An error occurred");
}

fn main() {
    // Initialize loggers and exporters (e.g., env_logger, tracing_subscriber)
}
```

Best practices include exporting metrics to Prometheus, using distributed tracing (e.g., OpenTelemetry), and structuring logs for aggregation. Consistent instrumentation helps diagnose issues and monitor system health.

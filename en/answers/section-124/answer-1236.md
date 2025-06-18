## 📘 Section: Microservice Architecture with Rust
### 🔹 Category: Observability
#### ✅ Answer 1236: Distributed logging and tracing with OpenTelemetry

Observability helps monitor and debug microservices. OpenTelemetry provides distributed tracing and logging.

In Rust:
- Use `opentelemetry` and `tracing` crates.
- Set up a tracer and exporter (e.g., Jaeger, OTLP).
- Instrument your code with spans and events.

Example:
```rust
use tracing::{info, span, Level};
use tracing_subscriber::layer::SubscriberExt;
use tracing_opentelemetry::OpenTelemetryLayer;

let tracer = opentelemetry_jaeger::new_pipeline().install_simple()?;
let telemetry = OpenTelemetryLayer::new(tracer);
tracing_subscriber::registry().with(telemetry).init();

let span = span!(Level::INFO, "my_span");
let _enter = span.enter();
info!("Hello, tracing!");
```
This setup enables distributed tracing and logging for your Rust microservices.

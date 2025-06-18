## 📘 Section: Microservices Observability
### 🔹 Category: Log and Trace Correlation
#### ✅ Answer 1384: Correlating logs and traces across services

Log and trace correlation allows tracking a request's journey through the system using both logs and traces. In Rust, crates like `tracing` and `tracing-opentelemetry` can add trace IDs to each log entry. This enables combining logs and traces from all services involved in a request. Such correlation greatly simplifies debugging and root cause analysis.

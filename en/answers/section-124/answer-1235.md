## 📘 Section: Microservice Architecture with Rust
### 🔹 Category: Resilience Patterns
#### ✅ Answer 1235: Resilience patterns: retries, circuit breakers

Resilience patterns help microservices handle failures gracefully. Common patterns include retrying failed requests, circuit breakers, and fallbacks.

In Rust:
- Use `tower` for middleware-based retries and circuit breakers.
- Use `futures-retry` for retrying async operations.

Example (futures-retry):
```rust
use futures_retry::{Retry, ErrorHandler, FutureFactory};

let retry_strategy = futures_retry::strategies::FixedInterval::from_millis(100);
let result = Retry::spawn(retry_strategy, || async { do_request().await }).await;
```
This approach increases reliability by handling transient errors automatically.

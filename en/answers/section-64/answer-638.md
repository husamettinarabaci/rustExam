## 📘 Section: Async Patterns and Runtime Internals
### 🔹 Category: Debugging async tasks and futures
#### ✅ Answer 638: Debugging async tasks and futures

Debugging async code can be challenging due to concurrency and non-determinism. Common issues include deadlocks, missed wakeups, and hangs. Use tools like `dbg!`, logging, and tracing crates to gain insight.

Example:

```rust
use tokio::time::{sleep, Duration};

#[tokio::main]
async fn main() {
    dbg!("Starting async task");
    sleep(Duration::from_millis(100)).await;
    dbg!("Task complete");
}
```

For advanced debugging, use tools like `tokio-console` to inspect running tasks and resource usage.

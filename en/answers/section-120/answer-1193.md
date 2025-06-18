## 📘 Section: Concurrency Design Patterns  
### 🔹 Category: Futures and promises patterns  
#### ✅ Answer 1193: Futures and promises patterns

Futures and promises are patterns for handling results of concurrent operations in the future. In Rust, the `Future` trait is used for async operations. The promise concept is typically represented by a channel (e.g., `oneshot`) that delivers a value in the future.

**Future example (async/await):**
```rust
use tokio::time::{sleep, Duration};

#[tokio::main]
async fn main() {
    let result = async_task().await;
    println!("Result: {}", result);
}

async fn async_task() -> u32 {
    sleep(Duration::from_millis(100)).await;
    42
}
```

**Promise equivalent:**
```rust
use tokio::sync::oneshot;
use tokio::spawn;

#[tokio::main]
async fn main() {
    let (tx, rx) = oneshot::channel();
    spawn(async move {
        tx.send(99).unwrap();
    });
    let value = rx.await.unwrap();
    println!("Promise result: {}", value);
}
```

A future waits for the result; a promise is a "guarantee" to provide a value. In Rust, a promise is commonly implemented with a `oneshot` channel.

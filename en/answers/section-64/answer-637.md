## 📘 Section: Async Patterns and Runtime Internals
### 🔹 Category: Building async-aware synchronization primitives
#### ✅ Answer 637: Building async-aware synchronization primitives

Async-aware synchronization primitives, like `tokio::sync::Mutex`, allow safe shared state in async code. Unlike standard mutexes, they do not block the thread but instead yield control until the lock is available.

Example:

```rust
use tokio::sync::Mutex;
use std::sync::Arc;

#[tokio::main]
async fn main() {
    let data = Arc::new(Mutex::new(0));
    let d2 = data.clone();
    let handle = tokio::spawn(async move {
        let mut lock = d2.lock().await;
        *lock += 1;
    });
    handle.await.unwrap();
    println!("Result: {}", *data.lock().await);
}
```

This allows multiple tasks to safely share and mutate state asynchronously.

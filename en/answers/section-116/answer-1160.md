## 📘 Section: Async Patterns in Practice
### 🔹 Category: Debugging async deadlocks and stalls
#### ✅ Answer 1160: Debugging async deadlocks and stalls

This answer demonstrates a scenario where an async deadlock or stall can occur, and explains how to detect and fix it. Deadlocks often happen when two async tasks wait on each other or the same lock.

```rust
use tokio::sync::Mutex;
use std::sync::Arc;

#[tokio::main]
async fn main() {
    let data = Arc::new(Mutex::new(0));
    let d1 = data.clone();
    let d2 = data.clone();

    // Deadlock example: waiting on the same mutex twice
    let h1 = tokio::spawn(async move {
        let _lock1 = d1.lock().await;
        // If you try to lock again before releasing, it will deadlock
        // let _lock2 = d1.lock().await; // This line would cause a deadlock
    });
    h1.await.unwrap();
}
```

To detect deadlocks:
- Observe if the code hangs or stalls.
- Use async runtime tools like `tokio-console` to inspect task states.

Solution: Never await the same mutex twice in the same task, and keep lock scopes as short as possible.

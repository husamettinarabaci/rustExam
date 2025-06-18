## 📘 Section: Async Patterns in Practice
### 🔹 Category: Using async mutexes and locks effectively
#### ✅ Answer 1152: Using async mutexes and locks effectively

Async mutexes (like `tokio::sync::Mutex`) allow safe, concurrent access to shared state in async code. Always `.await` the lock acquisition, and keep the critical section minimal to avoid holding the lock across `.await` points.

```rust
use tokio::sync::Mutex;
use std::sync::Arc;

#[tokio::main]
async fn main() {
    let data = Arc::new(Mutex::new(0));
    let d = data.clone();
    let handle = tokio::spawn(async move {
        let mut num = d.lock().await;
        *num += 1;
    });
    handle.await.unwrap();
    println!("Result: {}", *data.lock().await);
}
```

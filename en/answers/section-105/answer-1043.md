## 📘 Section: Futures and Async Primitives
### 🔹 Category: Implementing async mutexes and locks
#### ✅ Answer 1043: Implementing async mutexes and locks

Async mutexes like `tokio::sync::Mutex` are used to prevent data races in async code. This mutex ensures that only one async task can access the data at a time. In the example below, two tasks try to update the same value, but the mutex prevents simultaneous access.

```rust
use tokio::sync::Mutex;
use std::sync::Arc;

async fn update(shared: Arc<Mutex<i32>>) {
    let mut data = shared.lock().await;
    *data += 1;
}

#[tokio::main]
async fn main() {
    let shared = Arc::new(Mutex::new(0));
    let t1 = update(shared.clone());
    let t2 = update(shared.clone());
    tokio::join!(t1, t2);
    let result = shared.lock().await;
    println!("Result: {}", *result); // Result: 2
}
```

## 📘 Section: Async Rust in Depth  
### 🔹 Category: Shared State and Arc<Mutex<T>>  
#### ✅ Answer 508: Sharing mutable state across tasks with `Arc<Mutex<T>>`

With `Arc<Mutex<T>>`, you can safely update the same value from multiple async tasks.

```rust
use std::sync::Arc;
use tokio::sync::Mutex;

#[tokio::main]
async fn main() {
    let data = Arc::new(Mutex::new(0));

    let d1 = data.clone();
    let t1 = tokio::spawn(async move {
        let mut val = d1.lock().await;
        *val += 1;
    });

    let d2 = data.clone();
    let t2 = tokio::spawn(async move {
        let mut val = d2.lock().await;
        *val += 2;
    });

    t1.await.unwrap();
    t2.await.unwrap();

    let result = data.lock().await;
    println!("Final value: {}", *result);
}
```

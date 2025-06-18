## 📘 Section: Tokio Ecosystem Deep Dive  
### 🔹 Category: Tokio Synchronization Primitives  
#### ✅ Answer 1075: Using Tokio synchronization primitives

Tokio offers async-aware synchronization primitives like `Mutex`, `RwLock`, and `Notify`. These allow safe sharing and coordination of state between async tasks without blocking the runtime.

```rust
use tokio::sync::Mutex;
use std::sync::Arc;

#[tokio::main]
async fn main() {
    let data = Arc::new(Mutex::new(0));
    let data2 = data.clone();

    let handle = tokio::spawn(async move {
        let mut num = data2.lock().await;
        *num += 1;
    });

    handle.await.unwrap();
    println!("Value: {}", *data.lock().await);
}
```

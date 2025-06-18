## 📘 Section: Synchronization Primitives Deep Dive
### 🔹 Category: Synchronization in async environments
#### ✅ Answer 1138: Synchronization in async environments

In async Rust, primitives like `tokio::sync::Mutex` are used. They prevent data races between async tasks.

```rust
use tokio::sync::Mutex;
use std::sync::Arc;

#[tokio::main]
async fn main() {
    let data = Arc::new(Mutex::new(0));
    let d = data.clone();
    tokio::spawn(async move {
        let mut val = d.lock().await;
        *val += 1;
    }).await.unwrap();
    println!("Result: {}", *data.lock().await);
}
```
This example shows safe data sharing in an async environment.

## 📘 Section: Async Rust in Depth  
### 🔹 Category: Async Channels and mpsc  
#### ✅ Answer 507: Using `tokio::sync::mpsc` for async channels

With `tokio::sync::mpsc`, you can send messages from multiple async tasks and receive them in the main task.

```rust
use tokio::sync::mpsc;

#[tokio::main]
async fn main() {
    let (tx, mut rx) = mpsc::channel(10);

    let tx1 = tx.clone();
    tokio::spawn(async move {
        tx1.send("First message").await.unwrap();
    });

    tokio::spawn(async move {
        tx.send("Second message").await.unwrap();
    });

    for _ in 0..2 {
        if let Some(msg) = rx.recv().await {
            println!("Received: {}", msg);
        }
    }
}
```

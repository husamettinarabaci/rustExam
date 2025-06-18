## 📘 Section: Channel Patterns and Advanced Messaging  
### 🔹 Category: Using bounded vs unbounded channels  
#### ✅ Answer 1102: Using bounded vs unbounded channels

This example demonstrates both bounded and unbounded channels using `tokio::sync::mpsc`. In the bounded channel, the sender waits when the capacity is full.

```rust
use tokio::sync::mpsc;
use tokio::time::{sleep, Duration};

#[tokio::main]
async fn main() {
    // Bounded channel
    let (tx, mut rx) = mpsc::channel(2);
    for i in 0..4 {
        let tx = tx.clone();
        tokio::spawn(async move {
            tx.send(i).await.unwrap();
            println!("Bounded sent: {}", i);
        });
    }
    sleep(Duration::from_millis(100)).await;
    while let Some(val) = rx.recv().await {
        println!("Bounded received: {}", val);
    }

    // Unbounded channel
    let (tx, mut rx) = mpsc::unbounded_channel();
    for i in 0..4 {
        tx.send(i).unwrap();
        println!("Unbounded sent: {}", i);
    }
    for _ in 0..4 {
        if let Some(val) = rx.recv().await {
            println!("Unbounded received: {}", val);
        }
    }
}
```

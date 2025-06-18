## 📘 Section: Async Patterns in Practice
### 🔹 Category: Task coordination with async channels
#### ✅ Answer 1159: Task coordination with async channels

This answer demonstrates how to use async channels for message passing between async tasks using `tokio::sync::mpsc`.

```rust
use tokio::sync::mpsc;

#[tokio::main]
async fn main() {
    let (tx, mut rx) = mpsc::channel(4);
    for i in 0..3 {
        let tx = tx.clone();
        tokio::spawn(async move {
            tx.send(format!("Message from task {}", i)).await.unwrap();
        });
    }
    drop(tx); // Close all senders so the loop ends
    while let Some(msg) = rx.recv().await {
        println!("Received: {}", msg);
    }
}
```

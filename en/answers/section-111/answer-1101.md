## 📘 Section: Channel Patterns and Advanced Messaging  
### 🔹 Category: Implementing reliable messaging with channels  
#### ✅ Answer 1101: Implementing reliable messaging with channels

This example uses `tokio::sync::mpsc` to provide reliable and ordered message delivery between multiple producers and consumers. Each message is received in order and none are lost.

```rust
use tokio::sync::mpsc;
use tokio::task;

#[tokio::main]
async fn main() {
    let (tx, mut rx) = mpsc::channel(10);
    for i in 0..3 {
        let tx = tx.clone();
        task::spawn(async move {
            for j in 0..5 {
                tx.send(format!("Producer {}: message {}", i, j)).await.unwrap();
            }
        });
    }
    drop(tx);
    while let Some(msg) = rx.recv().await {
        println!("Received: {}", msg);
    }
}
```

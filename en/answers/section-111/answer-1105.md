## 📘 Section: Channel Patterns and Advanced Messaging  
### 🔹 Category: Using `broadcast` channels for pub-sub patterns  
#### ✅ Answer 1105: Using `broadcast` channels for pub-sub patterns

This example uses `tokio::sync::broadcast` to send messages to multiple receivers at once. Each receiver gets all messages.

```rust
use tokio::sync::broadcast;
use tokio::task;

#[tokio::main]
async fn main() {
    let (tx, _) = broadcast::channel(16);
    for i in 0..3 {
        let mut rx = tx.subscribe();
        task::spawn(async move {
            while let Ok(msg) = rx.recv().await {
                println!("Receiver {}: {}", i, msg);
            }
        });
    }
    for n in 0..5 {
        tx.send(format!("Message {}", n)).unwrap();
    }
}
```

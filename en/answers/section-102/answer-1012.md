## 📘 Section: Channels and Message Passing
### 🔹 Category: Broadcasting Messages with Broadcast Channels
#### ✅ Answer 1012: Broadcasting messages with broadcast channels

This example uses `tokio::sync::broadcast` to create a broadcaster and two subscribers. The broadcaster sends messages, and both subscribers receive and print all messages asynchronously.

```rust
use tokio::sync::broadcast;

#[tokio::main]
async fn main() {
    let (tx, _rx) = broadcast::channel(8);

    let mut rx1 = tx.subscribe();
    let mut rx2 = tx.subscribe();

    tokio::spawn(async move {
        for i in 0..3 {
            tx.send(format!("Announcement {}", i)).unwrap();
        }
    });

    tokio::spawn(async move {
        while let Ok(msg) = rx1.recv().await {
            println!("Subscriber 1 received: {}", msg);
        }
    });

    while let Ok(msg) = rx2.recv().await {
        println!("Subscriber 2 received: {}", msg);
    }
}
```

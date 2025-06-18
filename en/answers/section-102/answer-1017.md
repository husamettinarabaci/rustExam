## 📘 Section: Channels and Message Passing
### 🔹 Category: Channels for Task Coordination
#### ✅ Answer 1017: Using channels for task coordination

This example uses a channel for coordination between two tasks. One task sends a signal, the other receives it and prints the result.

```rust
use tokio::sync::mpsc;

#[tokio::main]
async fn main() {
    let (tx, mut rx) = mpsc::channel(1);

    tokio::spawn(async move {
        tx.send("Ready!").await.unwrap();
    });

    if let Some(msg) = rx.recv().await {
        println!("Coordination message: {}", msg);
    }
}
```

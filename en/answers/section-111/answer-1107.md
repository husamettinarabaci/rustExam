## 📘 Section: Channel Patterns and Advanced Messaging  
### 🔹 Category: Channel-based synchronization primitives  
#### ✅ Answer 1107: Channel-based synchronization primitives

This example shows one task waiting for a signal from another via a channel, providing synchronization between tasks.

```rust
use tokio::sync::oneshot;
use tokio::time::{sleep, Duration};

#[tokio::main]
async fn main() {
    let (tx, rx) = oneshot::channel();
    tokio::spawn(async move {
        sleep(Duration::from_secs(1)).await;
        tx.send("done").unwrap();
    });
    println!("Waiting for signal...");
    let msg = rx.await.unwrap();
    println!("Received: {}", msg);
}
```

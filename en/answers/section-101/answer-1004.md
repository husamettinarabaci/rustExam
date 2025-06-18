## 📘 Section: Async Runtime and Task Management  
### 🔹 Category: Concurrent Futures with `tokio::select!`  
#### ✅ Answer 1004: Concurrent futures with `tokio::select!`

This example starts two async operations: a timer (`tokio::time::sleep`) and waiting for a message on a channel. The `tokio::select!` macro is used to process whichever completes first, demonstrating concurrent waiting on multiple futures.

```rust
use tokio::{sync::oneshot, time::{sleep, Duration}};

#[tokio::main]
async fn main() {
    let (tx, rx) = oneshot::channel();
    tokio::spawn(async move {
        sleep(Duration::from_secs(1)).await;
        let _ = tx.send("Timer done");
    });

    tokio::select! {
        msg = rx => println!("Channel: {}", msg.unwrap()),
        _ = sleep(Duration::from_millis(500)) => println!("Sleep done"),
    }
}
```

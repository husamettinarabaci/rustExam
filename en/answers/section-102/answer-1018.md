## 📘 Section: Channels and Message Passing
### 🔹 Category: Channel Closing and Cleanup
#### ✅ Answer 1018: Closing and cleanup of channels

A channel is automatically closed when all senders (tx) are dropped. The receiver (rx) returns `None` or an error when the channel is closed. Tasks should check for closure and perform cleanup if needed.

Example:
```rust
use tokio::sync::mpsc;

#[tokio::main]
async fn main() {
    let (tx, mut rx) = mpsc::channel(1);
    drop(tx); // Close the channel

    match rx.recv().await {
        Some(msg) => println!("Received: {}", msg),
        None => println!("Channel closed."),
    }
}
```

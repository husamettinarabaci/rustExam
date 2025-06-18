## 📘 Section: Channels and Message Passing
### 🔹 Category: Handling Channel Errors Gracefully
#### ✅ Answer 1019: Handling channel errors gracefully

The most common channel errors are: receiver gets `None` if all senders are dropped, and sender gets an error if the receiver is gone. These are handled with `Result` or `Option` and should be managed appropriately.

Example:
```rust
use tokio::sync::mpsc;

#[tokio::main]
async fn main() {
    let (tx, mut rx) = mpsc::channel(1);
    drop(tx); // No sender

    match rx.recv().await {
        Some(msg) => println!("Received: {}", msg),
        None => println!("Channel closed, error handled."),
    }
}
```

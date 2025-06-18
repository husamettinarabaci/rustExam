## 📘 Section: Channels and Message Passing
### 🔹 Category: Asynchronous Channels with Tokio
#### ✅ Answer 1011: Using tokio::sync::mpsc channels

This example creates a sender and receiver using `tokio::sync::mpsc`. One task sends messages, while another receives and prints them asynchronously.

```rust
use tokio::sync::mpsc;

#[tokio::main]
async fn main() {
    let (tx, mut rx) = mpsc::channel(8);

    tokio::spawn(async move {
        for i in 0..5 {
            tx.send(format!("Message {}", i)).await.unwrap();
        }
    });

    while let Some(msg) = rx.recv().await {
        println!("Received: {}", msg);
    }
}
```

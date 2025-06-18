## 📘 Section: Channels and Message Passing
### 🔹 Category: Oneshot Channels for Single Response
#### ✅ Answer 1015: Using oneshot channels for single responses

This example uses `tokio::sync::oneshot` to send a single message from one task to another. The sender and receiver are started asynchronously, and the receiver prints the message.

```rust
use tokio::sync::oneshot;

#[tokio::main]
async fn main() {
    let (tx, rx) = oneshot::channel();

    tokio::spawn(async move {
        tx.send("Hello oneshot!").unwrap();
    });

    let msg = rx.await.unwrap();
    println!("Received: {}", msg);
}
```

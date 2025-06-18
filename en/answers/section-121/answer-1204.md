## 📘 Section: Advanced Async I/O and Networking  
### 🔹 Category: Backpressure in Async Network Streams  
#### ✅ Answer 1204: Handling backpressure in async network streams

Backpressure is a flow control mechanism that prevents a producer from overwhelming a consumer with more data than it can handle. In Rust, you can use bounded channels like `tokio::sync::mpsc` to implement backpressure.

```rust
use tokio::sync::mpsc;
use tokio::time::{sleep, Duration};

#[tokio::main]
async fn main() {
    let (tx, mut rx) = mpsc::channel(2); // channel with capacity 2
    tokio::spawn(async move {
        for i in 0..5 {
            tx.send(i).await.unwrap();
            println!("Sent: {}", i);
        }
    });
    while let Some(val) = rx.recv().await {
        println!("Received: {}", val);
        sleep(Duration::from_millis(500)).await;
    }
}
```

In this example, the sender waits when the channel is full, effectively applying backpressure.

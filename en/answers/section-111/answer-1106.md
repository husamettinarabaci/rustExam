## 📘 Section: Channel Patterns and Advanced Messaging  
### 🔹 Category: Implementing backpressure strategies  
#### ✅ Answer 1106: Implementing backpressure strategies

This example uses a bounded channel so the producer automatically waits if the consumer is slow, demonstrating a backpressure strategy.

```rust
use tokio::sync::mpsc;
use tokio::time::{sleep, Duration};

#[tokio::main]
async fn main() {
    let (tx, mut rx) = mpsc::channel(2);
    tokio::spawn(async move {
        for i in 0..5 {
            tx.send(i).await.unwrap();
            println!("Produced: {}", i);
        }
    });
    while let Some(val) = rx.recv().await {
        println!("Consumed: {}", val);
        sleep(Duration::from_millis(200)).await;
    }
}
```

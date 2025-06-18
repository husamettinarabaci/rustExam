## 📘 Section: Advanced Async Patterns  
### 🔹 Category: Managing task priorities and cancellation  
#### ✅ Answer 553: Managing task priorities and cancellation

This solution demonstrates how to manage task priorities and cancellation in async Rust. Using a `tokio::sync::oneshot` channel, you can cancel a task and handle completion or cancellation accordingly.

```rust
use tokio::sync::oneshot;
use tokio::time::{sleep, Duration};

#[tokio::main]
async fn main() {
    let (tx, rx) = oneshot::channel();
    let high_priority = tokio::spawn(async {
        sleep(Duration::from_millis(300)).await;
        println!("High priority task finished");
    });
    let low_priority = tokio::spawn(async move {
        tokio::select! {
            _ = sleep(Duration::from_secs(1)) => println!("Low priority task finished"),
            _ = rx => println!("Low priority task cancelled"),
        }
    });
    // Cancel the low priority task after 400ms
    sleep(Duration::from_millis(400)).await;
    let _ = tx.send(());
    let _ = high_priority.await;
    let _ = low_priority.await;
}
```

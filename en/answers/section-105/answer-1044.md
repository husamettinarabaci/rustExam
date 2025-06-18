## 📘 Section: Futures and Async Primitives
### 🔹 Category: Async condition variables and notifications
#### ✅ Answer 1044: Async condition variables and notifications

Async notification mechanisms like `tokio::sync::Notify` allow multiple async tasks to wait for an event and proceed when notified. In the example below, two tasks wait for a notification, and when one is sent, both continue.

```rust
use tokio::sync::Notify;
use std::sync::Arc;

#[tokio::main]
async fn main() {
    let notify = Arc::new(Notify::new());
    let n1 = notify.clone();
    let n2 = notify.clone();

    let waiter1 = tokio::spawn(async move {
        println!("Task 1 waiting...");
        n1.notified().await;
        println!("Task 1 continues!");
    });
    let waiter2 = tokio::spawn(async move {
        println!("Task 2 waiting...");
        n2.notified().await;
        println!("Task 2 continues!");
    });

    tokio::time::sleep(tokio::time::Duration::from_millis(500)).await;
    notify.notify_waiters();
    let _ = tokio::join!(waiter1, waiter2);
}
```

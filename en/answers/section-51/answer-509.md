## 📘 Section: Async Rust in Depth  
### 🔹 Category: Task Cancellation and Graceful Shutdown  
#### ✅ Answer 509: Managing task cancellation and graceful shutdown

You can use `JoinHandle::abort` to cancel an async task. Print a message when the task is cancelled.

```rust
use tokio::time::{sleep, Duration};

#[tokio::main]
async fn main() {
    let handle = tokio::spawn(async {
        loop {
            println!("Running...");
            sleep(Duration::from_millis(500)).await;
        }
    });

    sleep(Duration::from_secs(2)).await;
    handle.abort();
    println!("Task was cancelled and shut down gracefully.");
}
```

## 📘 Section: Async Rust in Depth  
### 🔹 Category: Timeout and tokio::time  
#### ✅ Answer 504: Handling timeouts with `tokio::time::timeout`

With `tokio::time::timeout`, you can check if an async operation completes within a given duration.

```rust
use tokio::time::{timeout, Duration, sleep};

async fn slow_task() {
    sleep(Duration::from_secs(2)).await;
}

#[tokio::main]
async fn main() {
    let result = timeout(Duration::from_secs(1), slow_task()).await;
    match result {
        Ok(_) => println!("Operation completed in time."),
        Err(_) => println!("Timeout!"),
    }
}
```

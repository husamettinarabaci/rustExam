## 📘 Section: Async Error Handling
### 🔹 Category: Async Error Handling
#### ✅ Answer 1060: Handling timeouts and cancellations with errors

This example uses `tokio::time::timeout` to limit an async operation. If a timeout occurs, an error message is shown; otherwise, the result is printed.

```rust
use tokio::time::{timeout, Duration};

async fn slow_task() -> &'static str {
    tokio::time::sleep(Duration::from_secs(2)).await;
    "Completed"
}

#[tokio::main]
async fn main() {
    match timeout(Duration::from_secs(1), slow_task()).await {
        Ok(res) => println!("Result: {}", res),
        Err(_) => println!("Timeout!"),
    }
}
```

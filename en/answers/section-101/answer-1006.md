## 📘 Section: Async Runtime and Task Management  
### 🔹 Category: Delays and Timeouts with Tokio  
#### ✅ Answer 1006: Delays and timeouts with `tokio::time`

This example waits for a specific duration in an async function and uses `tokio::time::timeout` to check if the operation completes in time. If a timeout occurs, an error message is printed.

```rust
use tokio::time::{sleep, timeout, Duration};

#[tokio::main]
async fn main() {
    let result = timeout(Duration::from_secs(1), async {
        sleep(Duration::from_secs(2)).await;
    }).await;

    match result {
        Ok(_) => println!("Operation completed in time"),
        Err(_) => println!("Timeout!"),
    }
}
```

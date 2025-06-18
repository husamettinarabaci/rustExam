## 📘 Section: Async Patterns in Practice
### 🔹 Category: Handling timeouts in async functions
#### ✅ Answer 1154: Handling timeouts in async functions

To handle timeouts in async functions, use `tokio::time::timeout`. It returns an error if the operation takes too long.

```rust
use tokio::time::{timeout, Duration};

#[tokio::main]
async fn main() {
    let result = timeout(Duration::from_secs(1), async {
        // Simulate work
        tokio::time::sleep(Duration::from_secs(2)).await;
        42
    }).await;
    match result {
        Ok(val) => println!("Completed: {}", val),
        Err(_) => println!("Timed out!"),
    }
}
```

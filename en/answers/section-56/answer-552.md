## 📘 Section: Advanced Async Patterns  
### 🔹 Category: Using `select!` for multiple concurrent futures  
#### ✅ Answer 552: Using `select!` for multiple concurrent futures

This solution shows how to use the `tokio::select!` macro to await multiple async operations and handle whichever completes first. This is useful for racing tasks or waiting for the fastest response.

```rust
use tokio::time::{sleep, Duration};

#[tokio::main]
async fn main() {
    let fut1 = sleep(Duration::from_secs(1));
    let fut2 = sleep(Duration::from_millis(500));

    tokio::select! {
        _ = fut1 => println!("fut1 finished first"),
        _ = fut2 => println!("fut2 finished first"),
    }
}
```

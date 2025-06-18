## 📘 Section: Async Patterns in Practice
### 🔹 Category: Implementing async retry and backoff logic
#### ✅ Answer 1151: Implementing async retry and backoff logic

This answer demonstrates how to implement retry and backoff logic for a failing async operation. Use `tokio::time::sleep` to add delay between attempts.

```rust
use tokio::time::{sleep, Duration};

async fn unreliable_operation() -> Result<u32, &'static str> {
    // Simulate a random failure
    if rand::random::<u8>() % 2 == 0 {
        Ok(42)
    } else {
        Err("Failed!")
    }
}

async fn retry_with_backoff(max_retries: u32) -> Result<u32, &'static str> {
    let mut delay = 100;
    for _ in 0..max_retries {
        match unreliable_operation().await {
            Ok(val) => return Ok(val),
            Err(_) => sleep(Duration::from_millis(delay)).await,
        }
        delay *= 2;
    }
    Err("All attempts failed!")
}

#[tokio::main]
async fn main() {
    match retry_with_backoff(5).await {
        Ok(val) => println!("Success: {}", val),
        Err(e) => println!("Error: {}", e),
    }
}
```

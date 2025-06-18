## 📘 Section: Advanced Async Patterns  
### 🔹 Category: Building async retry and backoff mechanisms  
#### ✅ Answer 554: Building async retry and backoff mechanisms

This solution demonstrates how to implement retry and exponential backoff logic in an async function. On each failure, the wait time doubles before retrying.

```rust
use tokio::time::{sleep, Duration};

async fn unreliable_operation() -> Result<(), ()> {
    // Simulate a 50% chance of failure
    if rand::random::<bool>() {
        Ok(())
    } else {
        Err(())
    }
}

#[tokio::main]
async fn main() {
    let mut delay = 100;
    let mut attempts = 0;
    let max_attempts = 5;
    loop {
        attempts += 1;
        match unreliable_operation().await {
            Ok(_) => {
                println!("Success on attempt {}", attempts);
                break;
            }
            Err(_) if attempts < max_attempts => {
                println!("Failed attempt {}, retrying in {}ms", attempts, delay);
                sleep(Duration::from_millis(delay)).await;
                delay *= 2;
            }
            Err(_) => {
                println!("Operation failed after {} attempts", attempts);
                break;
            }
        }
    }
}
```

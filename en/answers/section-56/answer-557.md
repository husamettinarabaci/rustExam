## 📘 Section: Advanced Async Patterns  
### 🔹 Category: Async error handling strategies  
#### ✅ Answer 557: Async error handling strategies

This solution demonstrates how to handle and propagate errors in async functions using `Result` and the `?` operator. Errors are handled at the top level in `main`.

```rust
use tokio::time::{sleep, Duration};

async fn may_fail(i: u8) -> Result<u8, &'static str> {
    sleep(Duration::from_millis(100)).await;
    if i % 2 == 0 {
        Ok(i)
    } else {
        Err("Odd number error")
    }
}

#[tokio::main]
async fn main() {
    match try_all().await {
        Ok(sum) => println!("Sum: {}", sum),
        Err(e) => println!("Error: {}", e),
    }
}

async fn try_all() -> Result<u8, &'static str> {
    let a = may_fail(2).await?;
    let b = may_fail(3).await?;
    Ok(a + b)
}
```

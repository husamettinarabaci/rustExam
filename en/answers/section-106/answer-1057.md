## 📘 Section: Async Error Handling
### 🔹 Category: Async Error Handling
#### ✅ Answer 1057: Using `anyhow` for dynamic error management

This example uses the `anyhow` crate for error management in an async function and displays a meaningful message on error.

```rust
use anyhow::{Result, anyhow};

async fn may_fail(flag: bool) -> Result<&'static str> {
    if flag {
        Ok("Success!")
    } else {
        Err(anyhow!("Something went wrong"))
    }
}

#[tokio::main]
async fn main() -> Result<()> {
    match may_fail(false).await {
        Ok(msg) => println!("{}", msg),
        Err(e) => println!("Error: {}", e),
    }
    Ok(())
}
```

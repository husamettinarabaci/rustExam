## 📘 Section: Async Error Handling
### 🔹 Category: Async Error Handling
#### ✅ Answer 1051: Propagating errors in async functions with `?`

This example shows how to propagate errors in an async function using the `?` operator. The `?` operator returns early if an error occurs, passing the error up to the caller.

```rust
use std::error::Error;

async fn may_fail(flag: bool) -> Result<&'static str, Box<dyn Error>> {
    if flag {
        Ok("Success!")
    } else {
        Err("Something went wrong".into())
    }
}

async fn run() -> Result<(), Box<dyn Error>> {
    let msg = may_fail(false).await?;
    println!("{}", msg);
    Ok(())
}
```

## 📘 Section: Async Error Handling
### 🔹 Category: Async Error Handling
#### ✅ Answer 1053: Combining multiple error types in async code

This example shows how to combine different error types from async functions using `Box<dyn Error>`.

```rust
use std::error::Error;

async fn parse_num(s: &str) -> Result<i32, std::num::ParseIntError> {
    s.parse::<i32>()
}

async fn may_fail(flag: bool) -> Result<(), &'static str> {
    if flag { Ok(()) } else { Err("flag is false") }
}

async fn run() -> Result<(), Box<dyn Error>> {
    let _ = parse_num("abc").await?;
    may_fail(false).await?;
    Ok(())
}
```

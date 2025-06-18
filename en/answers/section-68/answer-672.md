## 📘 Section: Advanced Error Handling and Recovery
### 🔹 Category: Using `thiserror` and `anyhow` crates effectively
#### ✅ Answer 672: Using `thiserror` and `anyhow` crates effectively

The `thiserror` crate makes it easy to define custom error types, while `anyhow` provides flexible error handling for application code. You can use `.context()` to add error context.

```rust
use thiserror::Error;
use anyhow::{Result, Context};

#[derive(Error, Debug)]
enum MyError {
    #[error("Not found")] 
    NotFound,
    #[error("Invalid input: {0}")]
    InvalidInput(String),
}

fn might_fail(input: &str) -> Result<(), MyError> {
    if input.is_empty() {
        Err(MyError::InvalidInput("empty string".into()))
    } else {
        Ok(())
    }
}

fn main() -> anyhow::Result<()> {
    might_fail("").context("Failed to process input")?;
    Ok(())
}
```

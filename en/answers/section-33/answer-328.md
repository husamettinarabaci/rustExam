## 📘 Section: Error Handling with Result and Option  
### 🔹 Category: Using anyhow for simple application-level error handling  
#### ✅ Answer 328: Using anyhow for simple application-level error handling

The `anyhow` crate makes error handling at the application level easier by allowing you to use a single error type for different error sources. With `anyhow::Result`, you can chain multiple fallible operations and propagate errors using the `?` operator.

```rust
use anyhow::{Result, Context};
use std::fs;

fn read_and_parse(path: &str) -> Result<i32> {
    let content = fs::read_to_string(path)
        .context("Failed to read file")?;
    let number: i32 = content.trim().parse()
        .context("Failed to parse number")?;
    Ok(number * 2)
}

fn main() -> Result<()> {
    match read_and_parse("input.txt") {
        Ok(val) => println!("Result: {val}"),
        Err(e) => println!("Error: {e}"),
    }
    Ok(())
}
```

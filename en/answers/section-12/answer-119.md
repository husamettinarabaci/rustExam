## 📘 Section: Error Handling  
### 🔹 Category: Converting Errors  
#### ✅ Answer 119: Converting between error types

**Explanation:**
The `From` trait allows you to convert between error types for easier error handling.

```rust
use std::num::ParseIntError;
fn parse_and_add(a: &str, b: &str) -> Result<i32, ParseIntError> {
    let x: i32 = a.parse()?;
    let y: i32 = b.parse()?;
    Ok(x + y)
}
```

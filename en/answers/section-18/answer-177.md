## 📘 Section: Error Handling and Result Types  
### 🔹 Category: Chaining Results  
#### ✅ Answer 177: Chaining multiple Result-returning operations

This function demonstrates how to chain multiple `Result`-returning operations using the `?` operator.

```rust
fn double_parse(a: &str, b: &str) -> Result<i32, std::num::ParseIntError> {
    let x = a.parse::<i32>()?;
    let y = b.parse::<i32>()?;
    Ok(x + y)
}
```

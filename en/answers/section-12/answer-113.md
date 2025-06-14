## 📘 Section: Error Handling  
### 🔹 Category: Error Propagation  
#### ✅ Answer 113: The `?` operator

**Explanation:**
The `?` operator returns early from a function if the result is `Err`, propagating the error.

```rust
fn parse_number(s: &str) -> Result<i32, std::num::ParseIntError> {
    let n = s.parse()?;
    Ok(n)
}
```

## 📘 Section: Error Handling  
### 🔹 Category: Result Type Basics  
#### ✅ Answer 111: What is the Result type in Rust?

**Explanation:**
The `Result` type is used for functions that can succeed or fail. It has two variants: `Ok(T)` for success and `Err(E)` for errors.

```rust
fn divide(a: i32, b: i32) -> Result<i32, String> {
    if b == 0 {
        Err("Cannot divide by zero".to_string())
    } else {
        Ok(a / b)
    }
}
```

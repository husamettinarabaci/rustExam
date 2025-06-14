## 📚 Section: Error Handling  
### 🔹 Category: Result Type  
#### ✅ Answer 51: Using the Result type for error handling

**Explanation:**
The `Result` type is used in Rust for functions that can succeed or fail. It allows you to return either a success value (`Ok`) or an error (`Err`).

```rust
fn divide(a: i32, b: i32) -> Result<i32, String> {
    if b == 0 {
        Err("Cannot divide by zero".to_string())
    } else {
        Ok(a / b)
    }
}

fn main() {
    match divide(10, 2) {
        Ok(result) => println!("Quotient: {}", result),
        Err(e) => println!("Error: {}", e),
    }
}
```

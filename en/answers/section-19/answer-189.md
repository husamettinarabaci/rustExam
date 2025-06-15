## 📘 Section: Option and Result Types  
### 🔹 Category: Result Combinators  
#### ✅ Answer 189: Using `map_err` on Result

The `map_err` method allows you to transform the error value of a `Result` without affecting the success value. This is useful for converting error types or adding context to errors.

```rust
fn parse_number(s: &str) -> Result<i32, &str> {
    s.parse::<i32>().map_err(|_| "Not a valid number!")
}

fn main() {
    let result = parse_number("42").map_err(|e| format!("Error: {}", e));
    println!("Result: {:?}", result); // Output: Result: Ok(42)

    let result = parse_number("abc").map_err(|e| format!("Error: {}", e));
    println!("Result: {:?}", result); // Output: Result: Err("Error: Not a valid number!")
}
```

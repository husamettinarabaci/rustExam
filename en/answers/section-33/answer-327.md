## 📘 Section: Error Handling with Result and Option  
### 🔹 Category: Chaining fallible operations and using map_err  
#### ✅ Answer 327: Chaining fallible operations with combinators like map_err

In Rust, combinators like `map`, `and_then`, and `map_err` allow you to chain fallible operations on `Result` types in a functional and concise way. `map_err` is especially useful for transforming error types or customizing error messages during the chain.

```rust
fn parse_and_double(input: &str) -> Result<i32, String> {
    input.trim().parse::<i32>()
        .map_err(|e| format!("Parse error: {e}"))
        .map(|n| n * 2)
}

fn main() {
    match parse_and_double("42a") {
        Ok(val) => println!("Result: {val}"),
        Err(e) => println!("Error: {e}"),
    }
}
```

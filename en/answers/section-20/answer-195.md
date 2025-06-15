## 📘 Section: Error Handling  
### 🔹 Category: Propagating Errors  
#### ✅ Answer 195: Propagating errors

To propagate errors in Rust, use the `?` operator in a function that returns `Result`. This forwards any error to the caller, simplifying error handling. At the top level, you can handle the error with `match` or other combinators.

```rust
fn might_fail(x: i32) -> Result<i32, String> {
    if x > 0 {
        Ok(x)
    } else {
        Err("Value must be positive".to_string())
    }
}

fn double_positive(x: i32) -> Result<i32, String> {
    let val = might_fail(x)?;
    Ok(val * 2)
}

fn main() {
    match double_positive(-5) {
        Ok(result) => println!("Result: {}", result),
        Err(e) => println!("Error: {}", e),
    }
}
```

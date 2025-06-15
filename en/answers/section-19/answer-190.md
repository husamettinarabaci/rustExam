## 📘 Section: Option and Result Types  
### 🔹 Category: Option and Result in Functions  
#### ✅ Answer 190: Option and Result in functions

Returning `Option` and `Result` from functions is idiomatic in Rust for handling absence of values and errors. `Option` is used when a value may or may not be present, while `Result` is used for error handling.

```rust
fn maybe_positive(n: i32) -> Option<i32> {
    if n > 0 { Some(n) } else { None }
}

fn even_or_error(n: i32) -> Result<i32, String> {
    if n % 2 == 0 {
        Ok(n)
    } else {
        Err(format!("{} is not even", n))
    }
}

fn main() {
    match maybe_positive(5) {
        Some(val) => println!("Positive: {}", val),
        None => println!("Not positive"),
    }

    match even_or_error(4) {
        Ok(val) => println!("Even: {}", val),
        Err(e) => println!("Error: {}", e),
    }

    match even_or_error(3) {
        Ok(val) => println!("Even: {}", val),
        Err(e) => println!("Error: {}", e),
    }
}
```

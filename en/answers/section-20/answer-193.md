## 📘 Section: Error Handling  
### 🔹 Category: Returning Result from Functions  
#### ✅ Answer 193: Returning `Result` from functions

Returning a `Result` from a function is the idiomatic way to signal success or failure in Rust. You can use `Ok` for success and `Err` for errors, often with a descriptive message.

```rust
fn check_positive(n: i32) -> Result<i32, String> {
    if n > 0 {
        Ok(n)
    } else {
        Err(format!("{} is not positive", n))
    }
}

fn main() {
    match check_positive(5) {
        Ok(val) => println!("Success: {}", val),
        Err(e) => println!("Error: {}", e),
    }

    match check_positive(-3) {
        Ok(val) => println!("Success: {}", val),
        Err(e) => println!("Error: {}", e),
    }
}
```

This approach allows you to handle errors gracefully and makes your code more robust.

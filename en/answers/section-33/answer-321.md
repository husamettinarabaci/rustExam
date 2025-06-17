## 📘 Section: Error Handling with Result and Option  
### 🔹 Category: Error Propagation with `?` Operator  
#### ✅ Answer 321: Propagating errors with the `?` operator

The `?` operator is used to easily propagate errors from a function to its caller. If an error occurs, the function returns early with the error, making error chaining and code readability much better.

```rust
use std::num::ParseIntError;

fn parse_number(s: &str) -> Result<i32, ParseIntError> {
    let n = s.parse::<i32>()?;
    Ok(n)
}

fn main() {
    // Successful scenario
    match parse_number("42") {
        Ok(n) => println!("Success: {}", n),
        Err(e) => println!("Error: {}", e),
    }
    // Failing scenario
    match parse_number("not_a_number") {
        Ok(n) => println!("Success: {}", n),
        Err(e) => println!("Error: {}", e),
    }
}
```

## 📘 Section: Error Handling with Result and Option  
### 🔹 Category: Handling errors with Result<T, E>  
#### ✅ Answer 322: Handling errors with pattern matching on Result<T, E>

The `Result<T, E>` type indicates that an operation can succeed (`Ok`) or fail (`Err`). You can handle errors by using `match` pattern matching. Below is an example showing both a successful and a failing scenario.

```rust
use std::num::ParseIntError;

fn parse_number(s: &str) -> Result<i32, ParseIntError> {
    s.parse::<i32>()
}

fn main() {
    // Successful scenario
    match parse_number("123") {
        Ok(n) => println!("Success: {}", n),
        Err(e) => println!("Error: {}", e),
    }
    // Failing scenario
    match parse_number("abc") {
        Ok(n) => println!("Success: {}", n),
        Err(e) => println!("Error: {}", e),
    }
}
```

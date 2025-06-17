## 📘 Section: Error Handling with Result and Option  
### 🔹 Category: Implementing the Error trait for custom types  
#### ✅ Answer 325: Implementing the Error trait for a custom error type

In Rust, custom error types are often defined as enums. To integrate with standard error handling, you should implement both the `std::fmt::Display` and `std::error::Error` traits. This allows your error to be used with `?` and other error-handling utilities.

```rust
use std::fmt;
use std::error::Error;

#[derive(Debug)]
enum MyError {
    NotFound,
    InvalidInput(String),
}

impl fmt::Display for MyError {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            MyError::NotFound => write!(f, "Item not found"),
            MyError::InvalidInput(msg) => write!(f, "Invalid input: {}", msg),
        }
    }
}

impl Error for MyError {}

fn do_something(input: &str) -> Result<(), MyError> {
    if input.is_empty() {
        Err(MyError::InvalidInput("input is empty".to_string()))
    } else if input == "none" {
        Err(MyError::NotFound)
    } else {
        Ok(())
    }
}
```

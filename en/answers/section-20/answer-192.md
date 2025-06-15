## 📘 Section: Error Handling  
### 🔹 Category: Custom Error Types  
#### ✅ Answer 192: Creating custom error types

You can define custom error types in Rust using an `enum` and implement the `Display` and `Error` traits for better error messages and compatibility with error handling APIs.

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

fn do_something(input: i32) -> Result<i32, MyError> {
    if input < 0 {
        Err(MyError::InvalidInput("Negative value".to_string()))
    } else if input == 0 {
        Err(MyError::NotFound)
    } else {
        Ok(input * 2)
    }
}

fn main() {
    match do_something(-1) {
        Ok(val) => println!("Success: {}", val),
        Err(e) => println!("Error: {}", e),
    }
}
```

This approach allows you to create meaningful and type-safe error handling in your Rust programs.

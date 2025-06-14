## 📘 Section: Error Handling and Result Types  
### 🔹 Category: Custom Error Types  
#### ✅ Answer 173: Defining and using custom error types

This example demonstrates how to define a custom error type and use it in a function that returns a `Result`.

```rust
use std::fmt;

enum MyError {
    NotFound,
    InvalidInput,
}

impl fmt::Display for MyError {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            MyError::NotFound => write!(f, "Not found"),
            MyError::InvalidInput => write!(f, "Invalid input"),
        }
    }
}

fn do_something(input: i32) -> Result<i32, MyError> {
    if input < 0 {
        Err(MyError::InvalidInput)
    } else {
        Ok(input)
    }
}
```

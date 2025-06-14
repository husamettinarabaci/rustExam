## 📚 Section: Error Handling  
### 🔹 Category: Custom Error Types  
#### ✅ Answer 54: Defining a custom error type

**Explanation:**
You can define your own error types using enums and implement the `Display` trait for custom error messages.

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
    } else if input == 0 {
        Err(MyError::NotFound)
    } else {
        Ok(input)
    }
}
```

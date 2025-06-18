## 📘 Section: Advanced Error Handling and Recovery
### 🔹 Category: Designing custom error enums with detailed variants
#### ✅ Answer 671: Designing custom error enums with detailed variants

Custom error enums allow you to represent different error scenarios in a type-safe way. By implementing `Display` and optionally `Error`, you can provide user-friendly messages and integrate with Rust's error handling ecosystem.

```rust
use std::fmt;
use std::error::Error;

#[derive(Debug)]
enum AppError {
    NotFound,
    InvalidInput(String),
    IoError(std::io::Error),
}

impl fmt::Display for AppError {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            AppError::NotFound => write!(f, "Resource not found"),
            AppError::InvalidInput(msg) => write!(f, "Invalid input: {}", msg),
            AppError::IoError(e) => write!(f, "IO error: {}", e),
        }
    }
}

impl Error for AppError {}

fn do_something(input: &str) -> Result<(), AppError> {
    if input.is_empty() {
        return Err(AppError::InvalidInput("input cannot be empty".into()));
    }
    // Simulate IO error
    // Err(AppError::IoError(std::io::Error::new(std::io::ErrorKind::Other, "disk error")))
    Ok(())
}
```

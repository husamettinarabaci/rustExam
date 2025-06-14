## 📘 Section: Error Handling and Result Types  
### 🔹 Category: The `thiserror` Crate  
#### ✅ Answer 179: Using the `thiserror` crate for custom errors

The `thiserror` crate makes it easy to define custom error types with helpful error messages.

```rust
use thiserror::Error;

#[derive(Error, Debug)]
enum MyError {
    #[error("An error occurred: {0}")]
    Custom(String),
}

fn do_something() -> Result<(), MyError> {
    Err(MyError::Custom("Something went wrong".into()))
}
```

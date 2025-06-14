## 📘 Section: Error Handling  
### 🔹 Category: The `Error` Trait  
#### ✅ Answer 117: The `Error` trait

**Explanation:**
The `Error` trait allows custom error types to be used with standard error handling. Implement it for your error types.

```rust
use std::fmt;
use std::error::Error;

#[derive(Debug)]
struct MyError;

impl fmt::Display for MyError {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "My error")
    }
}

impl Error for MyError {}
```

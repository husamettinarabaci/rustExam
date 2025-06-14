## 📘 Section: Error Handling  
### 🔹 Category: Custom Error Types  
#### ✅ Answer 114: Defining custom error types

**Explanation:**
You can define custom error types using enums and implement the `Error` trait for them.

```rust
use std::fmt;
use std::error::Error;

#[derive(Debug)]
enum MyError {
    NotFound,
    InvalidInput,
}

impl fmt::Display for MyError {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "{:?}", self)
    }
}

impl Error for MyError {}
```

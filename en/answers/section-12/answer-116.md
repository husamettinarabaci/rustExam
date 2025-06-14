## 📘 Section: Error Handling  
### 🔹 Category: Handling Multiple Errors  
#### ✅ Answer 116: Handling multiple error types

**Explanation:**
You can use `Box<dyn Error>` or custom enums to handle multiple error types in one function.

```rust
use std::error::Error;
fn do_something() -> Result<(), Box<dyn Error>> {
    // ...
    Ok(())
}
```

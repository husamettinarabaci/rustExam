## 📘 Section: Error Handling  
### 🔹 Category: Result Type Basics  
#### ✅ Answer 112: Unwrapping Result

**Explanation:**
You can extract the value from a `Result` using `.unwrap()` or `.expect()`. If the result is `Err`, the program will panic.

```rust
let res: Result<i32, &str> = Ok(5);
let value = res.unwrap(); // returns 5
let err: Result<i32, &str> = Err("fail");
// err.unwrap(); // panics
```

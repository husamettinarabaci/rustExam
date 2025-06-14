## 📘 Section: Error Handling and Result Types  
### 🔹 Category: The `unwrap` and `expect` Methods  
#### ✅ Answer 176: Using `unwrap` and `expect` safely

`unwrap` will panic with a generic message if the value is `None` or `Err`. `expect` allows you to provide a custom error message, making debugging easier.

```rust
let s = "abc";
let n = s.parse::<i32>().expect("Failed to parse integer from string");
```

## 📘 Section: Error Handling and Result Types  
### 🔹 Category: Option and Result Interconversion  
#### ✅ Answer 174: Converting between Option and Result

This function shows how to convert an `Option<T>` to a `Result<T, String>`, using a custom error message for the `None` case.

```rust
fn option_to_result<T>(opt: Option<T>, err_msg: String) -> Result<T, String> {
    opt.ok_or(err_msg)
}
```

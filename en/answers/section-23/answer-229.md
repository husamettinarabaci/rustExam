## 📘 Section: Generics II  
### 🔹 Category: Generic Type Aliases  
#### ✅ Answer 229: Generic type aliases

A generic type alias lets you create a shorthand for a generic type.

```rust
type MyResult<T> = Result<T, String>;

fn do_something() -> MyResult<i32> {
    Ok(42)
}
```

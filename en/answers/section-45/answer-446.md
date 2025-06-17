## 📘 Section: Lifetimes and Borrowing in Practice  
### 🔹 Category: Static Lifetime  
#### ✅ Answer 446: Static lifetime and its use cases

A `'static` lifetime means the data is available for the entire duration of the program. String literals have a `'static` lifetime by default.

```rust
fn static_str() -> &'static str {
    "I live for the whole program!"
}
```

## 📘 Section: Lifetimes and Borrowing in Practice  
### 🔹 Category: Functions Returning References  
#### ✅ Answer 444: Writing functions that return references

This function uses explicit lifetime annotations to ensure the returned reference is valid as long as the input reference is.

```rust
fn identity<'a>(x: &'a i32) -> &'a i32 {
    x
}
```

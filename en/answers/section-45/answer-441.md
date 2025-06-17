## 📘 Section: Lifetimes and Borrowing in Practice  
### 🔹 Category: Function Lifetime Annotations  
#### ✅ Answer 441: Adding explicit lifetimes to function parameters

This function demonstrates how to use explicit lifetime annotations in a function signature. Both input string slices share the same lifetime, ensuring the returned reference is valid as long as both inputs are.

```rust
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() {
        x
    } else {
        y
    }
}
```

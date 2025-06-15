## 📘 Section: Enums II  
### 🔹 Category: Reference and Mutable Matching  
#### ✅ Answer 119: Matching with ref and mut

This example demonstrates how to use `ref` and `ref mut` in pattern matching to access and modify values inside enums. `ref` allows you to borrow a reference, while `ref mut` gives you a mutable reference for modification.

```rust
fn main() {
    let mut maybe = Some(5);
    // Borrow as immutable reference
    match maybe {
        Some(ref x) => println!("Before: {}", x),
        None => println!("No value"),
    }
    // Borrow as mutable reference and modify
    match maybe {
        Some(ref mut x) => {
            *x += 10;
            println!("After: {}", x);
        },
        None => println!("No value"),
    }
}
```

## 📘 Section: Lifetimes and Borrowing in Practice  
### 🔹 Category: Designing Lifetime-Safe APIs  
#### ✅ Answer 450: Designing lifetime-safe APIs

Lifetimes in function signatures ensure that returned references cannot outlive their inputs, preventing dangling references. This is a key part of Rust's safety guarantees.

```rust
fn get_first<'a>(slice: &'a [i32]) -> Option<&'a i32> {
    slice.first()
}
```

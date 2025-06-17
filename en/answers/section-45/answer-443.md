## 📘 Section: Lifetimes and Borrowing in Practice  
### 🔹 Category: Lifetime Elision Rules  
#### ✅ Answer 443: Using lifetime elision rules properly

Rust's lifetime elision rules allow you to omit explicit lifetimes in simple cases. Here, the compiler infers the correct lifetimes automatically.

```rust
fn len(s: &str) -> usize {
    s.len()
}
```

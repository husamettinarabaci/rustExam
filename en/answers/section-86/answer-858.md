## 📘 Section: Memory Safety and Static Analysis
### 🔹 Category: Lifetime Guarantees at Compile Time
#### ✅ Answer 858: Understanding lifetime guarantees at compile time

Rust’s lifetime system checks the validity of references at compile time, preventing dangling references. Lifetime annotations specify how long references are valid.

```rust
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() { x } else { y }
}
```

The compiler’s lifetime rules prevent invalid and dangling references.

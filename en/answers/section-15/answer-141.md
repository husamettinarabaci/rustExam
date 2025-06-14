## 📘 Section: Lifetimes  
### 🔹 Category: Lifetime Basics  
#### ✅ Answer 141: What is a lifetime in Rust?

**Explanation:**
A lifetime is a way for Rust to track how long references are valid. Lifetimes prevent dangling references and ensure memory safety.

```rust
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() { x } else { y }
}
```

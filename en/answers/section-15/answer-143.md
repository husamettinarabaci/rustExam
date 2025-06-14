## 📘 Section: Lifetimes  
### 🔹 Category: Lifetime Elision  
#### ✅ Answer 143: Lifetime elision rules

**Explanation:**
Lifetime elision allows Rust to infer lifetimes in simple cases, so you don't have to write them explicitly.

```rust
fn get_first(s: &str) -> &str {
    &s[0..1]
}
```

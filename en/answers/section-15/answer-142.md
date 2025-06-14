## 📘 Section: Lifetimes  
### 🔹 Category: Lifetime Basics  
#### ✅ Answer 142: Lifetime annotations

**Explanation:**
Lifetime annotations specify how long references must be valid. Use `'a` syntax in function signatures.

```rust
fn first<'a>(s: &'a str) -> &'a str {
    &s[0..1]
}
```

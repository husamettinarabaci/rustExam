## 📘 Section: Lifetimes  
### 🔹 Category: Lifetime Bounds  
#### ✅ Answer 145: Lifetime bounds

**Explanation:**
Lifetime bounds specify that one lifetime must outlive another. Syntax: `'a: 'b`.

```rust
fn foo<'a, 'b: 'a>(x: &'a str, y: &'b str) -> &'a str { x }
```

## 📘 Section: Lifetimes  
### 🔹 Category: Lifetime Advanced  
#### ✅ Answer 150: Advanced lifetime usage

**Explanation:**
Advanced usage includes multiple lifetime parameters and complex relationships.

```rust
fn foo<'a, 'b>(x: &'a str, y: &'b str) -> &'a str { x }
```

## 📘 Section: Lifetimes  
### 🔹 Category: Static Lifetime  
#### ✅ Answer 146: The 'static lifetime

**Explanation:**
The `'static` lifetime means the reference is valid for the entire program. Used for string literals and global data.

```rust
let s: &'static str = "hello";
```

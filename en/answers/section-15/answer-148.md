## 📘 Section: Lifetimes  
### 🔹 Category: Lifetime in Methods  
#### ✅ Answer 148: Lifetimes in methods

**Explanation:**
Methods can have lifetime parameters, often matching the struct's lifetime.

```rust
struct Holder<'a> { s: &'a str }
impl<'a> Holder<'a> {
    fn get(&self) -> &'a str { self.s }
}
```

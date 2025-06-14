## 📘 Section: Lifetimes  
### 🔹 Category: Structs and Lifetimes  
#### ✅ Answer 144: Lifetimes in structs

**Explanation:**
Structs holding references need lifetime parameters to ensure references are valid.

```rust
struct Holder<'a> {
    s: &'a str,
}
let h = Holder { s: "hi" };
```

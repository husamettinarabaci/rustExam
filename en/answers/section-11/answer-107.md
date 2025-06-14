# Answer 107

## 📘 Section: Macros  
### 🔹 Category: Macro Export  
#### ✅ Answer 107: Exporting macros

**Explanation:**
A trait can require another trait by specifying it in its definition. For example:

```rust
trait A {}
trait B: A {}
```
This means any type implementing `B` must also implement `A`.

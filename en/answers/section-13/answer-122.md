## 📘 Section: Collections  
### 🔹 Category: Vectors  
#### ✅ Answer 122: Accessing vector elements

**Explanation:**
You can access elements with indexing (`v[0]`) or `.get()`. Indexing panics on out-of-bounds, `.get()` returns `None`.

```rust
let v = vec![1, 2, 3];
let first = v[0];
let maybe = v.get(10); // None
```

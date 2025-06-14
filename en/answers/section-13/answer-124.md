## 📘 Section: Collections  
### 🔹 Category: Strings  
#### ✅ Answer 124: String vs &str

**Explanation:**
`String` is an owned, growable string. `&str` is a borrowed string slice. Convert with `.as_str()` or `to_string()`.

```rust
let s: String = String::from("hi");
let slice: &str = &s;
let s2 = slice.to_string();
```

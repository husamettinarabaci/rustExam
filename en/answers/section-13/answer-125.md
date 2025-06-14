## 📘 Section: Collections  
### 🔹 Category: Strings  
#### ✅ Answer 125: Concatenating strings

**Explanation:**
Use the `+` operator or `format!` macro to concatenate strings.

```rust
let a = String::from("Hello");
let b = String::from(", world!");
let c = a + &b;
let d = format!("{}{}", c, "!");
```

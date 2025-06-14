## 📘 Section: Lifetimes  
### 🔹 Category: Lifetime Errors  
#### ✅ Answer 147: Lifetime errors

**Explanation:**
A lifetime error occurs when a reference could outlive the data it points to. Fix by adjusting lifetimes or ownership.

```rust
fn bad<'a>(x: &'a str) -> &'a str {
    let y = String::from("hi");
    // &y // error: `y` does not live long enough
    x
}
```

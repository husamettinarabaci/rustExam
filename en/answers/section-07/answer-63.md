## 📚 Section: Collections  
### 🔹 Category: Strings  
#### ✅ Answer 63: String manipulation

**Explanation:**
Strings are growable, UTF-8 encoded text. You can append with `push_str`.

```rust
fn main() {
    let mut s = String::from("Hello");
    s.push_str(", world!");
    println!("{}", s);
}
```

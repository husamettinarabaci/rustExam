## 📘 Section: Control Flow  
### 🔹 Category: Pattern Matching  
#### ✅ Answer 30: Using `if let` for pattern matching

**Explanation:**

`if let` is a convenient way to match a single pattern, especially with enums like `Option`.

```rust
fn main() {
    let maybe_num = Some(7);
    if let Some(n) = maybe_num {
        println!("Value: {}", n);
    } else {
        println!("No value");
    }
}
```

## 📘 Section: Control Flow  
### 🔹 Category: Pattern Matching  
#### ✅ Answer 29: Using `match` with multiple patterns

**Explanation:**

You can match multiple patterns in a single arm using the `|` operator.

```rust
fn main() {
    let num = 2;
    match num {
        1 | 2 => println!("One or Two"),
        _ => println!("Other"),
    }
}
```

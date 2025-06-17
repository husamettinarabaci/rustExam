## 📘 Section: Advanced Pattern Matching
### 🔹 Category: Conditional matching with `if let`
#### ✅ Answer 383: Using `if let` for conditional matching

This problem demonstrates how to use `if let` to match on Option or Result types. It allows you to handle the presence or absence of a value concisely.

```rust
fn main() {
    let maybe_num = Some(42);
    if let Some(n) = maybe_num {
        println!("Value: {}", n);
    } else {
        println!("No value found");
    }
}
```

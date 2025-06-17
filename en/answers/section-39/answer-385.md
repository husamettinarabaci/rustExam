## 📘 Section: Advanced Pattern Matching
### 🔹 Category: Match guards and complex conditions
#### ✅ Answer 385: Match guards and complex conditions

This problem demonstrates how to use match guards to produce different outputs based on conditions. This is useful for adding extra logic to pattern matching in Rust.

```rust
fn main() {
    let num = 7;
    match num {
        n if n < 0 => println!("Negative number"),
        n if n == 0 => println!("Zero"),
        n if n % 2 == 0 => println!("Even number"),
        _ => println!("Odd number"),
    }
}
```

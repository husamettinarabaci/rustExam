## 📘 Section: Advanced Patterns  
### 🔹 Category: Using multiple patterns with `|`  
#### ✅ Answer 169: Using multiple patterns with `|`

This example demonstrates how to use the `|` operator in pattern matching to match multiple values with a single arm. This is useful for handling several cases in a concise way.

```rust
fn main() {
    let value = 3;
    match value {
        1 | 3 | 5 => println!("Odd number: {}", value),
        2 | 4 | 6 => println!("Even number: {}", value),
        _ => println!("Other value: {}", value),
    }
}
```

## 📘 Section: Pattern Matching and Control Flow  
### 🔹 Category: Match Guards and Conditional Matching  
#### ✅ Answer 286: Combining patterns with `|` and `_`

This example demonstrates how to use `|` to combine multiple patterns and `_` as a wildcard in match arms. The `|` operator allows you to match several values in a single arm, while `_` matches any value not covered by previous arms.

```rust
fn main() {
    let x = 7;
    match x {
        1 | 3 | 5 => println!("Odd and Small"),
        2 | 4 => println!("Even and Small"),
        6 | 7 | 8 => println!("Medium"),
        _ => println!("Other"),
    }
}
```

## 📘 Section: Pattern Matching and Control Flow  
### 🔹 Category: Match Guards and Conditional Matching  
#### ✅ Answer 287: Using `@` bindings in match arms

This example demonstrates how to use the `@` binding in match arms to match a range and use the matched value. The `@` operator allows you to both check if a value is in a range and bind it to a variable for use in the match arm.

```rust
fn main() {
    let x = 15;
    match x {
        n @ 10..=20 => println!("In range: {}", n),
        0 => println!("Zero"),
        _ => println!("Out of range"),
    }
}
```

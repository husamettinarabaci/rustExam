## 📘 Section: Advanced Patterns  
### 🔹 Category: Using `@` bindings in patterns  
#### ✅ Answer 166: Using `@` bindings in patterns

This example demonstrates how to use the `@` binding in pattern matching. The `@` syntax allows you to bind a matched value to a variable while also specifying a pattern, such as a range.

```rust
fn main() {
    let value = 8;
    match value {
        n @ 1..=5 => println!("{} is in the range 1 to 5", n),
        n @ 6..=10 => println!("{} is in the range 6 to 10", n),
        n => println!("{} is outside the specified ranges", n),
    }
}
```

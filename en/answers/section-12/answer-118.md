## 📘 Section: Enums II  
### 🔹 Category: Enum Matching with Loops  
#### ✅ Answer 118: Matching with while let

This example demonstrates how to use `while let` for repeated pattern matching with enums in Rust. The `while let` loop continues as long as the pattern matches, making it useful for extracting values from options or iterators.

```rust
fn main() {
    let mut maybe = Some(3);
    while let Some(x) = maybe {
        println!("Value: {}", x);
        maybe = None;
    }
    println!("Loop ended");
}
```

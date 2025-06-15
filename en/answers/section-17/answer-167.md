## 📘 Section: Advanced Patterns  
### 🔹 Category: Matching on slices and arrays  
#### ✅ Answer 167: Matching on slices and arrays

This example demonstrates how to use pattern matching on slices and arrays in Rust. You can match on the length, specific elements, or use patterns like `[first, .., last]` to destructure arrays and slices.

```rust
fn main() {
    let arr = [1, 2, 3, 4];
    match arr {
        [first, .., last] => println!("First: {}, Last: {}", first, last),
        [single] => println!("Single element: {}", single),
        _ => println!("Other pattern"),
    }
}
```

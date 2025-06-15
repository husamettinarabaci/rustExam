## 📘 Section: Advanced Patterns  
### 🔹 Category: Ignoring values with `_` in patterns  
#### ✅ Answer 164: Ignoring values with `_` in patterns

This example shows how to use the underscore (`_`) in pattern matching to ignore values you do not need. In Rust, `_` can be used in `match` arms or destructuring to skip over values you don't care about.

```rust
fn main() {
    let tuple = (1, 2, 3);
    match tuple {
        (x, _, z) => println!("First: {}, Third: {}", x, z),
    }
}
```

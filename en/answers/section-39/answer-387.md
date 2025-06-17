## 📘 Section: Advanced Pattern Matching
### 🔹 Category: Nested pattern matching
#### ✅ Answer 387: Nested pattern matching

This problem demonstrates how to use nested pattern matching to access inner values of nested enums or structs in Rust.

```rust
enum Outer {
    Inner(Option<i32>),
    None,
}

fn main() {
    let value = Outer::Inner(Some(99));
    match value {
        Outer::Inner(Some(n)) => println!("Inner value: {}", n),
        Outer::Inner(None) => println!("No inner value"),
        Outer::None => println!("No value"),
    }
}
```

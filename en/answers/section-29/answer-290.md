## 📘 Section: Pattern Matching and Control Flow  
### 🔹 Category: Pattern matching in deeply nested data structures  
#### ✅ Answer 290: Pattern matching in deeply nested data structures

In this example, a data structure with nested structs and enums is defined. The `match` statement uses nested pattern matching to extract the innermost value and print it to the terminal. This demonstrates how to handle complex data structures with pattern matching in Rust.

```rust
enum Inner {
    Value(i32),
    None,
}

struct Outer {
    inner: Inner,
}

fn main() {
    let data = Outer { inner: Inner::Value(42) };
    match data {
        Outer { inner: Inner::Value(val) } => println!("Innermost value: {}", val),
        Outer { inner: Inner::None } => println!("No value"),
    }
}
```

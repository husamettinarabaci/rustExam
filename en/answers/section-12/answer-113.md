## 📘 Section: Enums II  
### 🔹 Category: Nested Enums and Advanced Matching  
#### ✅ Answer 113: Nested enums and matches

This example demonstrates how to define nested enums in Rust and use pattern matching to extract values from them. By nesting one enum inside another, you can represent complex data structures and use `match` to destructure and access the inner values.

```rust
enum Inner {
    Value(i32),
    Empty,
}

enum Outer {
    InnerEnum(Inner),
    Other,
}

fn main() {
    let nested = Outer::InnerEnum(Inner::Value(42));
    match nested {
        Outer::InnerEnum(Inner::Value(x)) => println!("Inner value: {}", x),
        Outer::InnerEnum(Inner::Empty) => println!("Inner is empty"),
        Outer::Other => println!("Other variant"),
    }
}
```

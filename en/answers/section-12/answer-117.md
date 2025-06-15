## 📘 Section: Enums II  
### 🔹 Category: Nested Enum Matching  
#### ✅ Answer 117: Matching on nested enums

This example demonstrates how to use pattern matching to destructure and handle nested enums in Rust. By matching on both the outer and inner enums, you can access deeply nested values.

```rust
enum Inner {
    Value(i32),
    None,
}

enum Outer {
    InnerEnum(Inner),
    Other,
}

fn main() {
    let nested = Outer::InnerEnum(Inner::Value(7));
    match nested {
        Outer::InnerEnum(Inner::Value(x)) => println!("Inner value: {}", x),
        Outer::InnerEnum(Inner::None) => println!("Inner is none"),
        Outer::Other => println!("Other variant"),
    }
}
```

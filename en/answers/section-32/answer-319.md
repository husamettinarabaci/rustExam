## 📘 Section: Traits and Trait Bounds
### 🔹 Category: Blanket Implementations
#### ✅ Answer 319: Using blanket implementations

This question demonstrates how to use blanket implementations in Rust. The `Printable` trait is implemented for all types that implement `Display`, so both `String` and `i32` can use the `print` method automatically.

```rust
use std::fmt::Display;

trait Printable {
    fn print(&self);
}

impl<T: Display> Printable for T {
    fn print(&self) {
        println!("{}", self);
    }
}

fn main() {
    let s = String::from("Hello, Rust!");
    let n = 42;
    s.print();
    n.print();
}
```

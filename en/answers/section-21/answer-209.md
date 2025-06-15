## 📘 Section: Traits I  
### 🔹 Category: Blanket Implementations  
#### ✅ Answer 209: Blanket implementations

A blanket implementation in Rust is when a trait is implemented for all types that satisfy a certain trait bound, rather than for a single concrete type. This allows you to provide default behavior for a wide range of types.

For example, you can implement a trait for all types that implement another trait:

```rust
trait MyTrait {
    fn describe(&self) -> String;
}

// Blanket implementation for all types that implement Display
use std::fmt::Display;

impl<T: Display> MyTrait for T {
    fn describe(&self) -> String {
        format!("Value: {}", self)
    }
}

fn main() {
    let x = 42;
    println!("{}", x.describe()); // Works because i32 implements Display
}
```

Here, `MyTrait` is implemented for all types `T` that implement `Display`. This is a blanket implementation.

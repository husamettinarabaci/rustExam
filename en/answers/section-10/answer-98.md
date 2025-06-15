## 📘 Section: Structs II  
### 🔹 Category: Methods and Trait Bounds  
#### ✅ Answer 98: Method with trait bounds

This example demonstrates how to use a trait bound in a method implementation. The method `print_value` is only available for types that implement the `Display` trait, ensuring that only printable types can be used.

```rust
use std::fmt::Display;

struct Wrapper<T> {
    value: T,
}

impl<T: Display> Wrapper<T> {
    fn print_value(&self) {
        println!("Value: {}", self.value);
    }
}

fn main() {
    let w = Wrapper { value: 42 };
    w.print_value(); // Works because i32 implements Display
}
```

## 📘 Section: Generics I  
### 🔹 Category: Generic Trait Implementations  
#### ✅ Answer 216: Generic trait implementations

You can implement a trait generically for all types that satisfy a certain bound. In this example, the trait `Printable` is implemented for all types that implement `Display`. This allows any such type to use the `print` method.

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
    let x = 42;
    let s = "hello";
    x.print();      // i32 implements Display
    s.print();      // &str implements Display
}
```

## 📘 Section: Advanced Traits and Generics  
### 🔹 Category: Blanket Implementations  
#### ✅ Answer 156: Creating blanket implementations for traits

Blanket implementations allow you to implement a trait for all types that satisfy certain bounds. Here, `Printable` is implemented for all types that implement `Display`.

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
```

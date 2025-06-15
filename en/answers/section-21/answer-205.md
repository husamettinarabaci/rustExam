## 📘 Section: Traits I  
### 🔹 Category: Implementing Traits for External Types  
#### ✅ Answer 205: Implementing traits for external types

In Rust, you can implement your own traits for types defined outside your crate (external types), but you cannot implement external traits for external types. Here, we implement a custom `Printable` trait for the primitive type `i32`.

```rust
trait Printable {
    fn print_value(&self);
}

impl Printable for i32 {
    fn print_value(&self) {
        println!("Value: {}", self);
    }
}

fn main() {
    let x: i32 = 42;
    x.print_value();
}
```

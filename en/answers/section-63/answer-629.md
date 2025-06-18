## 📘 Section: Advanced Trait Design and Usage
### 🔹 Category: Blanket Implementations and Coherence Rules
#### ✅ Answer 629: Blanket implementations and coherence rules

Blanket implementations allow you to implement a trait for all types that satisfy certain bounds. This is commonly used for generic programming. Rust's coherence rules (the orphan rule) ensure that only one implementation exists for a given type/trait pair.

```rust
trait Printable {
    fn print(&self);
}

impl<T: std::fmt::Debug> Printable for T {
    fn print(&self) {
        println!("{:?}", self);
    }
}

fn main() {
    42.print();
    "hello".print();
}
```

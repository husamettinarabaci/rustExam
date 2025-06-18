## 📘 Section: Advanced Trait Design and Usage
### 🔹 Category: Specialization and Default Overrides (Nightly)
#### ✅ Answer 625: Using specialization for default overrides (nightly)

Specialization is a nightly-only feature in Rust that allows you to provide a default implementation for a trait method and override it for specific types. This is done using the `default` keyword and requires the `specialization` feature flag.

```rust
#![feature(specialization)]

trait PrintType {
    fn print(&self) {
        println!("Default type");
    }
}

impl<T> PrintType for T {}

impl PrintType for i32 {
    fn print(&self) {
        println!("i32 type: {}", self);
    }
}

fn main() {
    42.print(); // i32
    3.14.print(); // f64 (default)
}
```
// Note: This requires nightly Rust and enabling the specialization feature.

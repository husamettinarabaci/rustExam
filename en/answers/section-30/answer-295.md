## 📘 Section: Modules and Crate Structure  
### 🔹 Category: Using Paths in Large Projects  
#### ✅ Answer 295: Using `crate::` and `super::` paths in large projects

This example demonstrates how to access a function defined in a top-level module from a nested module using both `crate::` (from the crate root) and `super::` (relative to the parent module). This is useful for organizing and accessing code in large Rust projects with deep module hierarchies.

```rust
mod utils {
    pub fn greet() {
        println!("Hello from utils!");
    }
}

mod features {
    pub mod feature_a {
        pub fn call_greet() {
            // Access via crate root
            crate::utils::greet();
            // Access via super::super
            super::super::utils::greet();
        }
    }
}

fn main() {
    features::feature_a::call_greet();
}
```

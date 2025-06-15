## 📘 Section: Modules II  
### 🔹 Category: Paths and the `super` keyword  
#### ✅ Answer 133: Paths and the `super` keyword

The `super` keyword in Rust allows a module to access items from its parent module. This is useful for organizing code in nested modules.

```rust
mod parent {
    pub const MESSAGE: &str = "Hello from parent!";
    pub mod child {
        pub fn show_message() {
            println!("{}", super::MESSAGE);
        }
    }
}

fn main() {
    parent::child::show_message();
}
```

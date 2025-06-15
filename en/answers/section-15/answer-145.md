## 📘 Section: Crates and External Packages  
### 🔹 Category: Using `use crate::` for Imports  
#### ✅ Answer 145: Using `use crate::` for imports

To import items from another module in the same crate, use the `use crate::` syntax. Example:

```rust
mod greetings {
    pub fn hello() {
        println!("Hello from module!");
    }
}

use crate::greetings::hello;

fn main() {
    hello();
}
```

This demonstrates how to organize code with modules and import functions using `use crate::` in Rust.

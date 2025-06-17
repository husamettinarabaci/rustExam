## 📘 Section: Modules and Crate Structure  
### 🔹 Category: Module Declaration and Import  
#### ✅ Answer 291: Defining and importing modules with `mod` and `use`

This example shows how to declare a module in the same file and use a function from it in the main function. The `mod` keyword defines the module, and `use` brings the function into scope.

```rust
mod greet {
    pub fn hello() {
        println!("Hello from the module!");
    }
}

use greet::hello;

fn main() {
    hello();
}
```
